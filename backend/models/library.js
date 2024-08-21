// models/library.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');  // Importa el modelo User

const Library = sequelize.define('Library', {
  idLibrary: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'idUser'
    }
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  contrasena: {
    type: DataTypes.STRING,
    allowNull: false
  },
  colonia: {
    type: DataTypes.STRING,
    allowNull: false
  },
  calle: {
    type: DataTypes.STRING,
    allowNull: false
  },
  numero: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tarjeta: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'library',
  timestamps: false
});

// Define la relación aquí
Library.belongsTo(User, { foreignKey: 'idUser' });

module.exports = Library;
