var categories = require('../models/category.js');

var codes = {
    'SUCCESSFULL_GENERIC_HTTP_CODE': 200,
    'CREATED_HTTP_CODE': 201,
    'UPDATED_HTTP_CODE': 201,
    'DELETED_HTTP_CODE': 201,
    'NOT_FOUND_HTTP_CODE': 204,
    'GENERIC_ERR': 400
};

/**
* @api {get} /categories List all categories
* @apiVersion 1.0.0
* @apiGroup Categories
* @apiParam limit limit results
* @apiParam offset offset
* @apiError (400) {Boolean} error true
* @apiError (400) {String} message Error message
* @apiSuccess (200) {Boolean} error false
* @apiSuccess (200) {String} message "success"
* @apiSuccess (200) {Array} categories categories array
* @apiSuccess (204) {Boolean} error false
* @apiSuccess (204) {String} message "not_found"
* @apiSuccess (204) {Array} categories []
* @apiSuccessExample (200) Success-Response:
* {
*   "error": false,
*   "message": "success",
*   "categories": [
*       {
*       "id": 1,
*       "slug": "slug-example-1",
*       "name": "Example1",
*       "created_at": "2015-01-13T05:46:41.000Z",
*       "updated_at": "2015-02-03T02:24:04.000Z"
*       },
*       {
*       "id": 2,
*       "slug": "slug-example-2",
*       "name": "Example2",
*       "created_at": "2015-01-13T05:46:57.000Z",
*       "updated_at": "2015-01-13T05:46:57.000Z"
*       }
*   ]
* }
* @apiSuccessExample (204) Success-Response:
* {
*   "error": false,
*   "message": "not_found",
*   "categories": []
* }
*/
exports.findAll = function(req, res) {
    categories.findAll(req.query.limit, req.query.offset, function (err, rows){
        if (err)
            res.type('json')
                .status(codes['GENERIC_ERR'])
                .send ({error: true, message: err});
        else
            if (rows.length > 0)
                res.type('json')
                    .status(codes['SUCCESSFULL_GENERIC_HTTP_CODE'])
                    .send({error: false, message: "success", categories: rows});
            else
                res.type('json')
                    .status(codes['NOT_FOUND_HTTP_CODE'])
                    .send ({error: false, message: 'not_found', categories: rows});
    });
};

/**
* @api {get} /categories/:id List single category
* @apiVersion 1.0.0
* @apiGroup Categories
* @apiParam Limit limit results
* @apiParam Offset offset
* @apiError (400) {Boolean} error true
* @apiError (400) {String} message Error message
* @apiSuccess (200) {Boolean} error false
* @apiSuccess (200) {String} message "success"
* @apiSuccess (200) {Array} category categories array
* @apiSuccessExample (200) Success-Response:
* {
*   "error": false,
*   "message": "success",
*   "category": [
*       {
*       "id": 1,
*       "slug": "slug-example-1",
*       "name": "Example1",
*       "created_at": "2015-01-13T05:46:41.000Z",
*       "updated_at": "2015-02-03T02:24:04.000Z"
*       }
*   ]
* }
* @apiSuccess (204) {Boolean} error false
* @apiSuccess (204) {String} message "not_found"
* @apiSuccess (204) {Array} category []
* @apiSuccessExample (204) Success-Response:
* {
*   "error": false,
*   "message": "not_found",
*   "category": []
* }
*/
exports.findById = function(req, res) {
    categories.findById(req.params.id, function (err, rows){
        if (err)
            res.type('json')
                .status(codes['GENERIC_ERR'])
                .send ({error: true, message: err});
        else
        if (rows.length > 0)
            res.type('json')
                .status(codes['SUCCESSFULL_GENERIC_HTTP_CODE'])
                .location('category/' + req.params.id)
                .send ({error: false, message: "success", category: rows});
        else
            res.type('json')
                .status(codes['NOT_FOUND_HTTP_CODE'])
                .send ({error: false, message: 'not_found', category: rows})
    });
};

/**
* @api {post} /categories Create category
* @apiVersion 1.0.0
* @apiGroup Categories
* @apiParam {String} slug slug term
* @apiParam {String} name descriptive name for category
* @apiError (400) {Boolean} error true
* @apiError (400) {String} message Error message
* @apiSuccess (200) {Boolean} error false
* @apiSuccess (200) {String} message "success"
* @apiSuccess (200) {HEADER} location of new category
* @apiSuccessExample (200) Success-Response:
* Header-Location: {HOST}/categories/2
* {
*   "error": false,
*   "message": "success"
* }
*/
exports.create = function(req, res) {
    categories.create(req.body.slug, req.body.name, function (err, rows){
        if (err)
            res.type('json')
                .status(codes['GENERIC_ERR'])
                .send ({error: true, message: err});
        else
            res.type('json')
                .status(codes['CREATED_HTTP_CODE'])
                .location(req.get('host') + '/categories/' + rows.insertId)
                .send ({error: false, message: "success"});
    });
};

/**
* @api {put} /categories/:id Update category
* @apiVersion 1.0.0
* @apiGroup Categories
* @apiParam {String} slug slug term
* @apiParam {String} name descriptive name for category
* @apiError (400) {Boolean} error true
* @apiError (400) {String} message Error message
* @apiSuccess (200) {Boolean} error false
* @apiSuccess (200) {String} message "success"
* @apiSuccessExample (200) Success-Response:
* Header-Location: {HOST}/categories/2
* {
*   "error": false,
*   "message": "success"
* }
* @apiSuccess (204) {Boolean} error false
* @apiSuccess (204) {String} message "not_found"
* @apiSuccess (204) {Array} categories []
* @apiSuccessExample (204) Success-Response:
* {
*   "error": false,
*   "message": "not_found"
* }
*/
exports.update = function(req, res) {
    categories.update(req.params.id, req.body.slug, req.body.name, function (err, rows){
        if (err)
            res.type('json')
                .status(codes['GENERIC_ERR'])
                .send ({error: true, message: err});
        else
            if (rows.changedRows > 0)
                res.type('json')
                    .status(codes['UPDATED_HTTP_CODE'])
                    .location(req.get('host') + '/categories/' + req.params.id)
                    .send ({error: false, message: "success"});
            else
                res.type('json')
                    .status(codes['NOT_FOUND_HTTP_CODE'])
                    .send ({error: false, message: "not_found"});
    });
};

/**
* @api {delete} /categories/:id Delete category
* @apiVersion 1.0.0
* @apiGroup Categories
* @apiError (400) {Boolean} error true
* @apiError (400) {String} message Error message
* @apiSuccess (200) {Boolean} error false
* @apiSuccess (200) {String} message "success"
* @apiSuccessExample (200) Success-Response:
* {
*   "error": false,
*   "message": "success"
* }
* @apiSuccess (204) {Boolean} error false
* @apiSuccess (204) {String} message "not_found"
* @apiSuccessExample (204) Success-Response:
* {
*   "error": false,
*   "message": "not_found"
* }
*/
exports.delete = function(req, res) {
    categories.delete(req.params.id, function (err, rows){
        if (err)
            res.type('json')
                .status(codes['GENERIC_ERR'])
                .send ({error: true, message: err});
        else
        if (rows.affectedRows > 0)
            res.type('json')
                .status(codes['DELETED_HTTP_CODE'])
                .send ({error: false, message: "success"});
        else
            res.type('json')
                .status(codes['NOT_FOUND_HTTP_CODE'])
                .send ({error: false, message: "not_found"});
    });
};