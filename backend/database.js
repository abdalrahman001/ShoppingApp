const mysql= require('mysql2')
const pool = mysql.createPool({
    host: 'mysql',
    port: 3306,
    user: 'root',
    password: 'G4@67&*mQnY!',
    database: 'shopping_app'
});
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to the database:', err.message);
        return;
    }
    console.log('Connected to the MySQL server');
    connection.release();  // Always release the connection after use
});

module.exports =pool.promise();