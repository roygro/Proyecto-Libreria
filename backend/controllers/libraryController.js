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

// Crear una nueva biblioteca
exports.createLibrary = async (req, res) => {
  const { nombre, correo, colonia, calle, numero, tarjeta } = req.body;
  try {
    // Verificar si el correo ya está registrado en la tabla library
    const existingLibrary = await Library.findOne({ where: { correo } });
    if (existingLibrary) {
      return res.status(400).json({ message: 'Este correo ya está asociado con otra biblioteca' });
    }

    // Verificar si el correo existe en la tabla users
    const user = await User.findOne({ where: { correo } });
    if (!user) {
      return res.status(400).json({ message: 'Usuario no encontrado con ese correo' });
    }

    // Crear la nueva biblioteca y asociarla con el idUser del usuario
    const newLibrary = await Library.create({
      nombre,
      correo, // correo del usuario que será el mismo en la tabla library
      contrasena: user.contrasena, // Usar la contraseña del usuario
      colonia,
      calle,
      numero,
      tarjeta,
      idUser: user.idUser // Asociar la biblioteca con el idUser del usuario
    });

    // Actualizar el rol del usuario a admin
    await User.update({ role: 'admin' }, { where: { idUser: user.idUser } });

    res.status(201).json(newLibrary);
  } catch (error) {
    console.error('Error al crear la biblioteca:', error);
    res.status(500).json({ message: 'Error al crear la biblioteca', error: error.message });
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

// Obtener todas las bibliotecas de un usuario específico
exports.getLibrariesByUserId = async (req, res) => {
  try {
    const libraries = await Library.findAll({ where: { userId: req.params.userId } });
    if (libraries.length > 0) {
      res.status(200).json(libraries);
    } else {
      res.status(404).json({ message: 'No se encontraron bibliotecas para el usuario' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las bibliotecas del usuario', error });
  }
};
