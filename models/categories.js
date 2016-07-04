var mysql = require('mysql'),
    config = require('config');

var connection = mysql.createConnection({
    host: config.get('database.host'),
    database: config.get('database.db'),
    user: config.get('database.username'),
    password: config.get('database.password'),
    connectionLimit: 50,
    queueLimit: 0
});


exports.findAll = function(limit, offset, callback) {
    connection.query('SELECT * FROM category LIMIT ? OFFSET ?', [parseInt(limit), parseInt(offset)], function(err, rows, fields){
        callback (err, rows);
    });
};

exports.findById = function(id, callback) {
    connection.query('SELECT * FROM category WHERE id=?', [id], function(err, rows, fields){
        callback (err, rows);
    });
};

exports.create = function(slug, name, callback) {
    connection.query('INSERT INTO category (slug, name, created_at, updated_at) VALUES (?,?,NOW(),NOW())', [slug, name], function(err, rows, fields){
        callback (err, rows);
    });
};

exports.update = function(id, slug, name, callback) {
    connection.query('UPDATE category SET slug=?, name=?, updated_at=NOW() WHERE id=?', [slug, name, id], function(err, rows, fields){
        callback (err, rows);
    });
};

exports.delete = function(id, callback) {
    connection.query('DELETE FROM category WHERE id=?', [id], function(err, rows, fields){
        callback (err, rows);
    });
};


