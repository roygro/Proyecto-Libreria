const express = require('express');
const router = express.Router();
const libraryController = require('../controllers/libraryController');

router.get('/', libraryController.getAllLibraries);
router.get('/:id', libraryController.getLibraryById);
router.post('/', libraryController.createLibrary);
router.put('/:id', libraryController.updateLibrary);
router.delete('/:id', libraryController.deleteLibrary);

module.exports = router;
