var pool = require ('./db');

exports.create = function(name, surname, birth, email, city, country, bar, address, phone, capacity, message, type, postId, callback) {
    var dateOfBirth = new Date(birth).toISOString().substring(0, 10);
    pool.get().query('INSERT INTO user (name, surname, date_of_birth, email, city, country, bar, address, phone, capacity, message, type, post_id, created_at, updated_at) ' +
                'VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,NOW(),NOW())',
                [name, surname, dateOfBirth, email, city, country, bar, address, phone, capacity, message, type, postId], function(err, rows, fields){
        callback(err, rows);
    });
};