const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/libraryController');

// Obtener todas las bibliotecas
router.get('/', libraryController.getAllLibraries);

// Obtener una biblioteca por ID
router.get('/:idLibrary', libraryController.getLibraryById); // Cambié ':id' a ':idLibrary' para que coincida con el frontend

// Crear una nueva biblioteca
router.post('/', libraryController.createLibrary);

// Actualizar una biblioteca por ID
router.put('/:idLibrary', libraryController.updateLibrary); // Cambié ':id' a ':idLibrary' para que coincida con el frontend

// Eliminar una biblioteca por ID
router.delete('/:idLibrary', libraryController.deleteLibrary); // Cambié ':id' a ':idLibrary' para que coincida con el frontend

// Obtener bibliotecas por ID de usuario
router.get('/user/:idUser', libraryController.getLibrariesByUserId);

// Obtener biblioteca por correo
router.get('/correo/:correo', libraryController.getLibraryByCorreo);

module.exports = router;
