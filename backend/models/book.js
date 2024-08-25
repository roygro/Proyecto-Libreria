//book.js (models)
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Book = sequelize.define('Book', {
  idBook: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idLibrary: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nomBook: {
    type: DataTypes.STRING,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false
  },
  autor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  editorial: {
    type: DataTypes.STRING,
    allowNull: false
  },
  precioLibro: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'book',
  timestamps: false
});

module.exports = Book;
