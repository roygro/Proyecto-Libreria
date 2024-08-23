// controllers/userController.js
const jwt = require('jsonwebtoken'); // Asegúrate de tener este paquete instalado
const User = require('../models/user');
const Library = require('../models/library');


exports.register = async (req, res) => {
  const { nombre, correo, telefono, contrasena, role } = req.body;
  try {
    // Verifica si el correo ya está registrado
    const existingUser = await User.findOne({ where: { correo } });
    if (existingUser) {
      return res.status(400).json({ message: 'El correo ya está registrado' });
    }

    // Crea el nuevo usuario sin encriptar la contraseña
    const user = await User.create({ nombre, correo, telefono, contrasena, role });
    
    // Responde con el usuario creado (sin enviar la contraseña)
    res.status(201).json({
      idUser: user.idUser,
      nombre: user.nombre,
      correo: user.correo,
      telefono: user.telefono,
      role: user.role,
    });
  } catch (error) {
    console.error('Error en el registro:', error);
    res.status(500).json({ message: 'Error al registrar el usuario' });
  }
};

// Método de login en el backend
exports.login = async (req, res) => {
  const { correo, contrasena } = req.body;
  try {
    const user = await User.findOne({ where: { correo } });
    if (!user) {
      console.log('Usuario no encontrado con el correo:', correo);
      return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
    }

    console.log('Usuario encontrado:', user);

    // Verifica la contraseña (asumiendo que está en texto plano; deberías usar bcrypt para encriptar la contraseña)
    const isMatch = contrasena.trim() === user.contrasena;
    if (!isMatch) {
      console.log('Contraseña no coincide para el usuario:', user.correo);
      return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
    }

    console.log('Contraseña coincide, acceso permitido');

    // Verificar si el usuario tiene una biblioteca asociada
    const library = await Library.findOne({ where: { idUser: user.idUser } });
    const hasLibrary = !!library;

    // Generar token JWT
    const token = jwt.sign(
      { idUser: user.idUser, role: user.role },
      'your_secret_key', // Debes usar una clave secreta segura
      { expiresIn: '1h' }
    );

    // Responder con el token, role y hasLibrary
    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      token: token,
      role: user.role,
      hasLibrary: hasLibrary
    });

  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
  }
};