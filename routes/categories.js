var categories = require('../models/categories.js');

/**
 * @api {get} /categories List all categories
 * @apiVersion 1.0.0
 * @apiGroup Categories
 * @apiParam limit limit results
 * @apiParam offset offset
 * @apiError {Boolean} error true
 * @apiError {String} message Error message
 * @apiSuccess {Boolean} error false
 * @apiSuccess {String} message "success"
 * @apiSuccess {Array} categories categories array
 * @apiSuccessExample Success-Response:
 * {
   *  "error": false,
   *  "message": "success",
   *  "categories": [
   *    {
   *      "id": 1,
   *      "slug": "slug-example-1",
   *      "name": "Example1",
   *      "created_at": "2015-01-13T05:46:41.000Z",
   *      "updated_at": "2015-02-03T02:24:04.000Z"
   *    },
   *    {
   *      "id": 2,
   *      "slug": "slug-example-2",
   *      "name": "Example2",
   *      "created_at": "2015-01-13T05:46:57.000Z",
   *      "updated_at": "2015-01-13T05:46:57.000Z"
   *    }
   *    ]
   * }
 */
exports.findAll = function(req, res) {
    categories.findAll(req.query.limit, req.query.offset, function (err, rows){
        if (err)
            res.send ({error: true, message: err});
        else
            res.send ({error: false, message: "success", categories: rows});
    });
};

/**
 * @api {get} /categories/:id List single categories
 * @apiVersion 1.0.0
 * @apiGroup Categories
 * @apiParam Limit limit results
 * @apiParam Offset offset
 * @apiError {Boolean} error true
 * @apiError {String} message Error message
 * @apiSuccess {Boolean} error false
 * @apiSuccess {String} message "success"
 * @apiSuccess {Array} category categories array
 * @apiSuccessExample Success-Response:
 * {
   *  "error": false,
   *  "message": "success",
   *  "category": [
   *    {
   *      "id": 1,
   *      "slug": "slug-example-1",
   *      "name": "Example1",
   *      "created_at": "2015-01-13T05:46:41.000Z",
   *      "updated_at": "2015-02-03T02:24:04.000Z"
   *    }
   *    ]
   * }
 */
exports.findById = function(req, res) {
    categories.findById(req.params.id, function (err, row){
        if (err)
            res.send ({error: true, message: err});
        else
            res.send ({error: false, message: "success", category: row});
    });
};

/**
 * @api {post} /categories Create category
 * @apiVersion 1.0.0
 * @apiGroup Categories
 * @apiParam {String} slug slug term
 * @apiParam {String} name descriptive name for category
 * @apiError {Boolean} error true
 * @apiError {String} message Error message
 * @apiSuccess {Boolean} error false
 * @apiSuccess {String} message "success"
 * @apiSuccessExample Success-Response:
 * {
   *  "error": false,
   *  "message": "success",
   *  "id": 2
   * }
 */
exports.create = function(req, res) {
    categories.create(req.body.slug, req.body.name, function (err, rows){
        if (err)
            res.send ({error: true, message: err});
        else
            res.send ({error: false, message: "success", id: rows.insertId});
    });
};

/**
 * @api {put} /categories/:id Update category
 * @apiVersion 1.0.0
 * @apiGroup Categories
 * @apiParam {String} slug slug term
 * @apiParam {String} name descriptive name for category
 * @apiError {Boolean} error true
 * @apiError {String} message Error message
 * @apiSuccess {Boolean} error false
 * @apiSuccess {String} message "success"
 * @apiSuccessExample Success-Response:
 * {
   *  "error": false,
   *  "message": "success",
   *  "affectedRows": 1,
   *  "changedRows": 1
   * }
 */
exports.update = function(req, res) {
    categories.update(req.params.id, req.body.slug, req.body.name, function (err, rows){
        if (err)
            res.send ({error: true, message: err});
        else
            res.send ({error: false, message: "success", affectedRows: rows.affectedRows, changedRows: rows.changedRows});
    });
};

/**
 * @api {delete} /categories/:id Delete category
 * @apiVersion 1.0.0
 * @apiGroup Categories
 * @apiError {Boolean} error true
 * @apiError {String} message Error message
 * @apiSuccess {Boolean} error false
 * @apiSuccess {String} message "success"
 * @apiSuccessExample Success-Response:
 * {
   *  "error": false,
   *  "message": "success",
   *  "affectedRows": 1
   * }
 */
exports.delete = function(req, res) {
    categories.delete(req.params.id, function (err, rows){
        if (err)
            res.send ({error: true, message: err});
        else
            res.send ({error: false, message: "success", affectedRows: rows.affectedRows});
    });
};