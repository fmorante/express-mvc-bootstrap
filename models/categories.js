var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    database : 'JD',
    user     : 'root',
    password : ''
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
    connection.query('UPDATE category SET slug=?, name=? WHERE id=?', [slug, name, id], function(err, rows, fields){
        callback (err, rows);
    });
};

exports.delete = function(id, callback) {
    connection.query('DELETE FROM category WHERE id=?', [id], function(err, rows, fields){
        callback (err, rows);
    });
};


