var mysql = require('mysql'),
    config = require('config'),
    Sequelize = require('sequelize'),
    sequelize = new Sequelize(config.get('database.db'), config.get('database.username'), config.get('database.password'), {
    dialect: config.get('database.dialect'),
    port: config.get('database.port')
});


exports.findAll = function(limit, offset, callback) {
    var query = 'SELECT * from category LIMIT :limit OFFSET :offset';
    sequelize
        .query(query,
        { replacements: { limit: parseInt(limit), offset: parseInt(offset) }, type: sequelize.QueryTypes.SELECT })
        .then(function(rows){
            callback (false, rows);
        })
        .catch(function(err){
            callback (err, null)
        });
};

exports.findById = function(id, callback) {
    var query = 'SELECT * FROM category WHERE id=:id';
    sequelize
        .query(query,
        { replacements: { id: parseInt(id) }, type: sequelize.QueryTypes.SELECT })
        .then(function(rows){
            callback (false, rows);
        })
        .catch(function(err){
            callback (err, null)
        });
};

exports.create = function(slug, name, callback) {
    var query = 'INSERT INTO category (slug, name, created_at, updated_at) VALUES (:slug, :name, NOW(), NOW())';
    sequelize
        .query(query,
        { replacements: { slug: slug, name: name }, type: sequelize.QueryTypes.INSERT})
        .then(function(rows){
            console.log (rows);
            callback (false, rows);
        })
        .catch(function(err){
            callback (err, null)
        });
};


exports.update = function(id, slug, name, callback) {
    var query = 'UPDATE category SET slug=:slug, name=:name, updated_at=NOW() WHERE id=:id';
    sequelize
        .query(query,
        { replacements: { slug: slug, name: name, id: parseInt(id) }, type: sequelize.QueryTypes.UPDATE})
        .then(function(rows){
            callback (false);
        })
        .catch(function(err){
            callback (err)
        });
};

exports.delete = function(id, callback) {
    var query = 'DELETE FROM category WHERE id=:id';
    sequelize
        .query(query,
        { replacements: { id: parseInt(id) }, type: sequelize.QueryTypes.DELETE})
        .then(function(rows){
            callback (false, rows);
        })
        .catch(function(err){
            callback (err, null)
        });
};


