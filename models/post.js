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
    connection.query('SELECT * FROM post LIMIT ? OFFSET ?', [parseInt(limit), parseInt(offset)], function(err, rows, fields){
        callback (err, rows);
    });
};

exports.findById = function(id, callback) {
    connection.query('SELECT * FROM post WHERE id=?', [id], function(err, rows, fields){
        callback (err, rows);
    });
};

exports.findMedias = function(id, limit, offset, callback) {
    connection.query('SELECT c.* FROM category c, post_has_category h, post p WHERE c.id = h.category_id AND p.id = h.post_id AND p.id = ? LIMIT ? OFFSET ?', [id, parseInt(limit), parseInt(offset)], function(err, rows, fields){
        callback (err, rows);
    });
};

exports.findCategories = function(id, limit, offset, callback) {
    connection.query('SELECT m.* FROM post_media m, post p WHERE p.id = m.post_id AND p.id = ? LIMIT ? OFFSET ?', [id, parseInt(limit), parseInt(offset)], function(err, rows, fields){
        callback (err, rows);
    });
};

exports.findTags = function(id, limit, offset, callback) {
    connection.query('SELECT t.* FROM tag t, post_has_tag h, post p WHERE t.id = h.tag_id AND p.id = h.post_id AND p.id = ? LIMIT ? OFFSET ?', [id, parseInt(limit), parseInt(offset)], function(err, rows, fields){
        callback (err, rows);
    });
};


