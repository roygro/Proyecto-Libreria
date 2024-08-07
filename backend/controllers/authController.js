const bcrypt = require('bcryptjs');
const { query } = require('../models/userModel');

const saltRounds = 10;

const register = async (req, res) => {
    const { nombre, correo, telefono, contrasena } = req.body;

    try {
        // Verificar si el usuario ya existe
        const [existingUser] = await query('SELECT * FROM users WHERE correo = ?', [correo]);
        if (existingUser) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }

        // Hash de la contraseña
        const hashedPassword = await bcrypt.hash(contrasena, saltRounds);

        // Insertar nuevo usuario
        await query('INSERT INTO users (nombre, correo, telefono, contrasena) VALUES (?, ?, ?, ?)', [nombre, correo, telefono, hashedPassword]);

        res.status(201).json({ message: 'Usuario registrado exitosamente' });
    } catch (error) {
        console.error('Error en el registro:', error);
        res.status(500).json({ message: 'Error en el registro', error: error.message });
    }
};

const login = async (req, res) => {
    const { correo, contrasena } = req.body;

    try {
        // Obtener usuario
        const [user] = await query('SELECT * FROM users WHERE correo = ?', [correo]);
        console.log('Usuario obtenido:', user); // Log para verificar que se obtiene el usuario
        if (!user) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // Comparar contraseñas
        const match = await bcrypt.compare(contrasena, user.contrasena);
        if (!match) {
            return res.status(401).json({ message: 'Credenciales inválidas' });
        }

        // El inicio de sesión fue exitoso, devolvemos el rol del usuario y un mensaje
        res.json({ 
            message: 'Inicio de sesión exitoso', 
            role: user.role 
        });
    } catch (error) {
        console.error('Error en el inicio de sesión:', error);
        res.status(500).json({ message: 'Error en el inicio de sesión', error: error.message });
    }
};


module.exports = { register, login };
