var categories = require('../models/categories.js');

exports.findAll = function(req, res) {
    categories.findAll(req.query.limit, req.query.offset, function (err, rows){
        if (err)
            res.send ({error: true, message: err});
        else
            res.send ({error: false, message: "success", categories: rows});
    });
};

exports.findById = function(req, res) {
    categories.findById(req.params.id, function (err, row){
        if (err)
            res.send ({error: true, message: err});
        else
            res.send ({error: false, message: "success", category: row});
    });
};

exports.create = function(req, res) {
    categories.create(req.body.slug, req.body.name, function (err, rows){
        if (err)
            res.send ({error: true, message: err});
        else
            res.send ({error: false, message: "success", id: rows.insertId});
    });
};

exports.update = function(req, res) {
    categories.update(req.params.id, req.body.slug, req.body.name, function (err, rows){
        if (err)
            res.send ({error: true, message: err});
        else
            res.send ({error: false, message: "success", affectedRows: rows.affectedRows, changedRows: rows.changedRows});
    });
};

exports.delete = function(req, res) {
    categories.delete(req.params.id, function (err, rows){
        if (err)
            res.send ({error: true, message: err});
        else
            res.send ({error: false, message: "success", affectedRows: rows.affectedRows});
    });
};