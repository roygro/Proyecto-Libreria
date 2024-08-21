const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Rutas para libros
router.get('/', bookController.getAllBooks);
router.get('/:idBook', bookController.getBookById);
router.post('/', bookController.createBook);
router.put('/:idBook', bookController.updateBook);
router.delete('/:idBook', bookController.deleteBook);

module.exports = router;