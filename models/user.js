var mysql = require('mysql'),
    config = require('config');

var pool = mysql.createPool({
    host: config.get('database.host'),
    database: config.get('database.db'),
    user: config.get('database.username'),
    password: config.get('database.password'),
    connectionLimit: 50,
    queueLimit: 0
});

exports.create = function(name, surname, birth, email, city, country, bar, address, phone, capacity, message, type, postId, callback) {
    var dateOfBirth = new Date(birth).toISOString().substring(0, 10);
    pool.getConnection(function (err, connection) {
        if (err)
            callback(err, null);
        else
            connection.query('INSERT INTO user (name, surname, date_of_birth, email, city, country, bar, address, phone, capacity, message, type, post_id, created_at, updated_at) ' +
                'VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,NOW(),NOW())',
                [name, surname, dateOfBirth, email, city, country, bar, address, phone, capacity, message, type, postId], function(err, rows, fields){
                connection.release();
                callback(err, rows);
            });
    });

};