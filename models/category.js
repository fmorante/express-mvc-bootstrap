var pool = require ('./db');

exports.findAll = function(limit, offset, callback) {
    pool.get().query('SELECT * FROM category LIMIT ? OFFSET ?', [parseInt(limit), parseInt(offset)], function (err, rows, fields) {
        callback(err, rows);
    });
};

exports.findById = function(id, callback) {
    pool.get().query('SELECT * FROM category WHERE id=?', [id], function(err, rows, fields){
        callback(err, rows);
    });
};

exports.create = function(slug, name, callback) {
    pool.get().query('INSERT INTO category (slug, name, created_at, updated_at) VALUES (?,?,NOW(),NOW())', [slug, name], function(err, rows, fields){
        callback(err, rows);
    });
};

exports.update = function(id, slug, name, callback) {
    pool.get().query('UPDATE category SET slug=?, name=?, updated_at=NOW() WHERE id=?', [slug, name, id], function(err, rows, fields){
        callback(err, rows);
    });
};

exports.delete = function(id, callback) {
    pool.get().query('DELETE FROM category WHERE id=?', [id], function(err, rows, fields){
        callback(err, rows);
    });
};

exports.findPostsBySlug = function(slug, limit, offset, callback) {
    pool.get().query('SELECT p.* FROM post p, post_has_category h, category c WHERE p.id = h.post_id AND c.id = h.category_id AND c.slug = ? LIMIT ? OFFSET ?', [slug, parseInt(limit), parseInt(offset)], function(err, rows, fields){
        callback(err, rows);
    });
};