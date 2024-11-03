// config/database.js

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('ng_BookShop', 'root', '190203', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
