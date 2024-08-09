const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Library = sequelize.define('Library', {
  idLibrary: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
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

module.exports = Library;
