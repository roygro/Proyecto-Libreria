// relations.js
const User = require('./user');
const Library = require('./library');

User.hasMany(Library, { foreignKey: 'idUser' });
Library.belongsTo(User, { foreignKey: 'idUser' });

module.exports =  {User, Library };
