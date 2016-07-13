var mysql = require('mysql'),
    config = require('config');

var pool = null;

exports.connect = function(done) {
    pool = mysql.createPool({
        host: config.get('database.host'),
        database: config.get('database.db'),
        user: config.get('database.username'),
        password: config.get('database.password'),
        connectionLimit: 50,
        queueLimit: 0
    });

    done()
};

exports.get = function() {
    return pool;
};


