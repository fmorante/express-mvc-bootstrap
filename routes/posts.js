var post = require('../models/post.js')

exports.findAll = function(req, res) {
    post.findAll(req.query.limit, req.query.offset, function (err, rows){
        if (err)
            res.send ({error: true, message: err});
        else
            res.send ({error: false, message: "success", posts: rows});
    });
};

exports.findById = function(req, res) {
    post.findById(req.params.id, function (err, rows){
        if (err)
            res.send ({error: true, message: err});
        else
            res.send ({error: false, message: "success", posts: rows});
    });
};

exports.findMedias = function(req, res) {
    post.findMedias(req.params.id, req.query.limit, req.query.offset, function (err, rows){
        if (err)
            res.send ({error: true, message: err});
        else
            res.send ({error: false, message: "success", medias: rows});
    });
};

exports.findCategories = function(req, res) {
    post.findCategories(req.params.id, req.query.limit, req.query.offset, function (err, rows){
        if (err)
            res.send ({error: true, message: err});
        else
            res.send ({error: false, message: "success", categories: rows});
    });
};

exports.findTags = function(req, res) {
    post.findTags(req.params.id, req.query.limit, req.query.offset, function (err, rows){
        if (err)
            res.send ({error: true, message: err});
        else
            res.send ({error: false, message: "success", tags: rows});
    });
};