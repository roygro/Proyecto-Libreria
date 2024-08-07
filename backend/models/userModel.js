const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'hola',
    database: 'ng_BookShop',
    port: 3306,
    connectionLimit: 10 // Limitar el número de conexiones para evitar sobrecarga
});

// Promesa de consulta para facilitar el uso con `async/await`
const query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.query(sql, values, (err, results) => {
            if (err) {
                console.error('Error en la consulta:', err);
                return reject(err);
            }
            resolve(results);
        });
    });
};

module.exports = { query };
