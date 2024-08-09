// config/database.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ng_BookShop', 'root', 'hola', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
