// controllers/userController.js

const User = require('../models/user');

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

exports.login = async (req, res) => {
  const { correo, contrasena } = req.body;
  try {
    const user = await User.findOne({ where: { correo } });
    if (!user) {
      console.log('Usuario no encontrado con el correo:', correo);
      return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
    }

    console.log('Usuario encontrado:', user);

    const isMatch = contrasena.trim() === user.contrasena;
    if (!isMatch) {
      console.log('Contraseña no coincide para el usuario:', user.correo);
      return res.status(401).json({ message: 'Correo o contraseña incorrectos' });
    }

    console.log('Contraseña coincide, acceso permitido');

    // Enviar la respuesta JSON con token y role
    const token = 'your_jwt_token_here'; // Aquí deberías generar un token JWT
    res.status(200).json({
      message: 'Inicio de sesión exitoso',
      token: token, 
      role: user.role
    });

  } catch (error) {
    console.error('Error en el inicio de sesión:', error);
    res.status(500).json({ message: 'Error al iniciar sesión', error: error.message });
  }
};
