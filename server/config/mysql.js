
module.exports = function () {
    var mysql = require('mysql');
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'admin',
        database: 'project_x'
    });

    connection.connect();
    return connection;
}