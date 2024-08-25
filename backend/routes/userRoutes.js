//userRoutes.js
const express = require('express');
const router = express.Router();

// Asegúrate de que estás importando correctamente el controlador
const userController = require('../controllers/userController');

// Rutas para registro e inicio de sesión
router.post('/register', userController.register);
router.post('/login', userController.login);

module.exports = router;
