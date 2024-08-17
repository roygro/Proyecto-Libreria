const Library = require('../models/library');
const User = require('../models/user');

// Obtener todas las entradas de la biblioteca
exports.getAllLibraries = async (req, res) => {
  try {
    const libraries = await Library.findAll();
    res.status(200).json(libraries);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las bibliotecas', error });
  }
};

// Obtener una entrada de la biblioteca por ID
exports.getLibraryById = async (req, res) => {
  try {
    const library = await Library.findByPk(req.params.id);
    if (library) {
      res.status(200).json(library);
    } else {
      res.status(404).json({ message: 'Biblioteca no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener la biblioteca', error });
  }
};

// Crear una nueva entrada en la biblioteca
exports.createLibrary = async (req, res) => {
  const { nombre, correo, contrasena, colonia, calle, numero, tarjeta } = req.body;
  try {
    // Verificar si el correo ya está registrado
    const existingLibrary = await Library.findOne({ where: { correo } });
    if (existingLibrary) {
      return res.status(400).json({ message: 'Correo ya registrado' });
    }
    
    const newLibrary = await Library.create({
      nombre,
      correo,
      contrasena,
      colonia,
      calle,
      numero,
      tarjeta
    });
    res.status(201).json(newLibrary);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la biblioteca', error });
  }
};

// Actualizar una entrada de la biblioteca
exports.updateLibrary = async (req, res) => {
  try {
    const [updated] = await Library.update(req.body, {
      where: { idLibrary: req.params.id } // Asegúrate de que 'idLibrary' sea correcto
    });
    if (updated) {
      const updatedLibrary = await Library.findByPk(req.params.id);
      res.status(200).json(updatedLibrary);
    } else {
      res.status(404).json({ message: 'Biblioteca no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar la biblioteca', error });
  }
};

// Eliminar una entrada de la biblioteca
exports.deleteLibrary = async (req, res) => {
  try {
    const deleted = await Library.destroy({
      where: { idLibrary: req.params.id }
    });
    if (deleted) {
      res.status(200).json({ message: 'Biblioteca eliminada' });
    } else {
      res.status(404).json({ message: 'Biblioteca no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la biblioteca', error });
  }
};
