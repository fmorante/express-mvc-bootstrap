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

exports.findAll = function(limit, offset, callback) {
    pool.getConnection(function (err, connection) {
        if (err)
            callback(err, null);
        else
            connection.query('SELECT * FROM category LIMIT ? OFFSET ?', [parseInt(limit), parseInt(offset)], function (err, rows, fields) {
                connection.release();
                callback(err, rows);
        });
    });
};

exports.findById = function(id, callback) {
    pool.getConnection(function (err, connection) {
        if (err)
            callback(err, null);
        else
            connection.query('SELECT * FROM category WHERE id=?', [id], function(err, rows, fields){
                connection.release();
                callback(err, rows);
            });
    });
};

exports.create = function(slug, name, callback) {
    pool.getConnection(function (err, connection) {
        if (err)
            callback(err, null);
        else
            connection.query('INSERT INTO category (slug, name, created_at, updated_at) VALUES (?,?,NOW(),NOW())', [slug, name], function(err, rows, fields){
                connection.release();
                callback(err, rows);
            });
    });
};

exports.update = function(id, slug, name, callback) {
    pool.getConnection(function (err, connection) {
        if (err)
            callback(err, null);
        else
            connection.query('UPDATE category SET slug=?, name=?, updated_at=NOW() WHERE id=?', [slug, name, id], function(err, rows, fields){
                connection.release();
                callback(err, rows);
            });
    });
};

exports.delete = function(id, callback) {
    pool.getConnection(function (err, connection) {
        if (err)
            callback(err, null);
        else
            connection.query('DELETE FROM category WHERE id=?', [id], function(err, rows, fields){
                connection.release();
                callback(err, rows);
            });
    });
};

exports.findPostsBySlug = function(slug, limit, offset, callback) {
    pool.getConnection(function (err, connection) {
        if (err)
            callback(err, null);
        else
            connection.query('SELECT p.* FROM post p, post_has_category h, category c WHERE p.id = h.post_id AND c.id = h.category_id AND c.slug = ? LIMIT ? OFFSET ?', [slug, parseInt(limit), parseInt(offset)], function(err, rows, fields){
                connection.release();
                callback(err, rows);
            });
    });
};

