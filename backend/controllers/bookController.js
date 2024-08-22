const Book = require('../models/book');
const Library = require('../models/library');

// Obtener todos los libros
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.status(200).json(books);
  } catch (error) {
    console.error('Error al obtener los libros:', error);
    res.status(500).json({ message: 'Error al obtener los libros' });
  }
};

// Obtener un libro por su ID
exports.getBookById = async (req, res) => {
  try {
    const book = await Book.findByPk(req.params.idBook);
    if (!book) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }
    res.status(200).json(book);
  } catch (error) {
    console.error('Error al obtener el libro:', error);
    res.status(500).json({ message: 'Error al obtener el libro' });
  }
};

// Crear un nuevo libro
exports.createBook = async (req, res) => {
  try {
    const { nomBook, descripcion, autor, editorial, precioLibro, image, correo } = req.body;

    // Verificar que todos los campos requeridos están presentes
    if (!nomBook || !descripcion || !autor || !editorial || !precioLibro || !image || !correo) {
      return res.status(400).json({ message: 'Todos los campos son requeridos' });
    }

    // Buscar la biblioteca por correo electrónico
    const library = await Library.findOne({ where: { correo: correo } });

    if (!library) {
      return res.status(404).json({ message: 'Biblioteca no encontrada con el correo proporcionado' });
    }

    // Crear el libro
    const newBook = await Book.create({
      nomBook,
      descripcion,
      autor,
      editorial,
      precioLibro,
      image,
      idLibrary: library.idLibrary // Asignar el idLibrary encontrado
    });

    res.status(201).json(newBook);
  } catch (error) {
    console.error('Error al crear el libro:', error.message);
    res.status(500).json({ message: 'Error al crear el libro', error: error.message });
  }
};


// Actualizar un libro existente
exports.updateBook = async (req, res) => {
  try {
    const { nomBook, descripcion, autor, editorial, precioLibro, image, idLibrary } = req.body;

    const [updated] = await Book.update({
      nomBook,
      descripcion,
      autor,
      editorial,
      precioLibro,
      image,
      idLibrary
    }, {
      where: { idBook: req.params.idBook }
    });

    if (!updated) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }

    const updatedBook = await Book.findByPk(req.params.idBook);
    res.status(200).json(updatedBook);
  } catch (error) {
    console.error('Error al actualizar el libro:', error);
    res.status(500).json({ message: 'Error al actualizar el libro' });
  }
};

// Eliminar un libro
exports.deleteBook = async (req, res) => {
  try {
    const deleted = await Book.destroy({
      where: { idBook: req.params.idBook }
    });

    if (!deleted) {
      return res.status(404).json({ message: 'Libro no encontrado' });
    }

    res.status(200).json({ message: 'Libro eliminado' });
  } catch (error) {
    console.error('Error al eliminar el libro:', error);
    res.status(500).json({ message: 'Error al eliminar el libro' });
  }
};
