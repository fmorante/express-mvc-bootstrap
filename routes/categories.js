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
* HTTP/1.1 200 OK
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
* HTTP/1.1 204 No Content
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
* HTTP/1.1 200 OK
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
* @apiSuccessExample (204) Success-Response:
* HTTP/1.1 204 No Content
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
                .location(req.get('host') + '/category/' + req.params.id)
                .send ({error: false, message: "success", category: rows});
        else
            res.type('json')
                .status(codes['NOT_FOUND_HTTP_CODE'])
                .send ()
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
* HTTP/1.1 200 OK
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
* HTTP/1.1 200 OK
* Header-Location: {HOST}/categories/2
* {
*   "error": false,
*   "message": "success"
* }
* @apiSuccessExample (204) Success-Response:
* HTTP/1.1 204 No Content
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
                    .send();
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
* HTTP/1.1 200 OK
* {
*   "error": false,
*   "message": "success"
* }
* @apiSuccessExample (204) Success-Response:
* HTTP/1.1 204 No Content
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
                .send();
    });
};

/**
* @api {get} /categories/:slug/posts List posts related to category slug
* @apiVersion 1.0.0
* @apiGroup Categories
* @apiParam limit limit results
* @apiParam offset offset
* @apiError (400) {Boolean} error true
* @apiError (400) {String} message Error message
* @apiSuccess (200) {Boolean} error false
* @apiSuccess (200) {String} message "success"
* @apiSuccess (200) {Array} posts posts array
* @apiSuccessExample (200) Success-Response:
* HTTP/1.1 200 OK
* {
*   "error": false,
*   "message": "success",
*   "posts": [
*       {
*       "id": 22,
*       "publication_date": "2015-07-09T00:00:00.000Z",
*       "slug": "slug",
*       "type": "post",
*       "title_home": "EL AUTÉNTICO TENNESSEE WHISKEY",
*       "description_home": "",
*       "link": "",
*       "title": "JACK DANIEL’S OLD Nº7: EL AUTÉNTICO TENNESSEE WHISKEY",
*       "subtitle": "",
*       "description": "<p>Jack\r\nDaniel's se elabora en la destilería americana más antigua en Lynchburg,\r\nTennessee (EEUU) desde 1866. Su carácter independiente y genuino, unido a su\r\nsabor inconfundible, lo han convertido en el whiskey más vendido del mundo. Hecho\r\ncon agua de manantial pura y filtrado a través de 3 metros de carbón de arce,\r\nesta elaboración única lo diferencia de otros whiskeys americanos y bourbons.\r\nEl auténtico Tennessee Whiskey madura en barriles nuevos de roble americano\r\nfabricados por nuestros artesanos.</p>\r\n\r\n<p>A\r\ntravés de la historia, Jack Daniel’s se ha convertido en un símbolo de calidad,\r\nconsiguiendo 7 medallas de oro y convirtiendo su botella en todo un icono. Su\r\ncaracterística etiqueta y su famoso logotipo “Old Nº 7”, cuyo significado sigue\r\nsiendo hoy en día un misterio, son reconocidos mundialmente.</p>",
*       "quote": "",
*       "quote_author": "",
*       "is_promo": "no",
*       "promo_type": "link",
*       "promo_link": "",
*       "promo_start_date": "0000-00-00",
*       "promo_end_date": "0000-00-00",
*       "created_at": "2015-07-13T06:48:40.000Z",
*       "updated_at": "2015-07-22T11:03:39.000Z"
*       },
*       {
*       "id": 23,
*       "publication_date": "2015-07-01T00:00:00.000Z",
*       "slug": "slug",
*       "type": "banner",
*       "title_home": "",
*       "description_home": "",
*       "link": "",
*       "title": "",
*       "subtitle": "",
*       "description": "",
*       "quote": "",
*       "quote_author": "",
*       "is_promo": "no",
*       "promo_type": "link",
*       "promo_link": "",
*       "promo_start_date": "0000-00-00",
*       "promo_end_date": "0000-00-00",
*       "created_at": "2015-07-13T07:04:26.000Z",
*       "updated_at": "2015-07-13T08:03:59.000Z"
*       }
*   ]
* }
* @apiSuccessExample (204) Success-Response:
* HTTP/1.1 204 No Content
*/
exports.findPostsBySlug = function(req, res) {
    categories.findPostsBySlug (req.params.slug, req.query.limit, req.query.offset, function (err, rows){
        if (err)
            res.type('json')
                .status(codes['GENERIC_ERR'])
                .send ({error: true, message: err});
        else
        if (rows.length > 0)
            res.type('json')
                .status(codes['SUCCESSFULL_GENERIC_HTTP_CODE'])
                .send({error: false, message: "success", posts: rows});
        else
            res.type('json')
                .status(codes['NOT_FOUND_HTTP_CODE'])
                .send();
    });
};