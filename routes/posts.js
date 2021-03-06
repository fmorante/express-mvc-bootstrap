var post = require('../models/post.js')

/**
* @api {get} /posts List all posts
* @apiVersion 1.0.0
* @apiGroup Posts
* @apiParam limit limit results
* @apiParam offset offset
* @apiError {Boolean} error true
* @apiError {String} message Error message
* @apiSuccess {Boolean} error false
* @apiSuccess {String} message "success"
* @apiSuccess {Array} posts posts array
* @apiSuccessExample Success-Response:
* {
* "error": false,
* "message": "success",
* "posts": [
* {
*  "id": 22,
*  "publication_date": "2015-07-09T00:00:00.000Z",
*  "slug": "sobrejackdaniels",
* "type": "post",
*  "title_home": "EL AUTÉNTICO TENNESSEE WHISKEY",
*  "description_home": "",
*  "link": "",
*  "title": "JACK DANIEL’S OLD Nº7: EL AUTÉNTICO TENNESSEE WHISKEY",
*  "subtitle": "",
*  "description": "<p>Jack\r\nDaniel's se elabora en la destilería americana más antigua en Lynchburg,\r\nTennessee (EEUU) desde 1866. Su carácter independiente y genuino, unido a su\r\nsabor inconfundible, lo han convertido en el whiskey más vendido del mundo. Hecho\r\ncon agua de manantial pura y filtrado a través de 3 metros de carbón de arce,\r\nesta elaboración única lo diferencia de otros whiskeys americanos y bourbons.\r\nEl auténtico Tennessee Whiskey madura en barriles nuevos de roble americano\r\nfabricados por nuestros artesanos.</p>\r\n\r\n<p>A\r\ntravés de la historia, Jack Daniel’s se ha convertido en un símbolo de calidad,\r\nconsiguiendo 7 medallas de oro y convirtiendo su botella en todo un icono. Su\r\ncaracterística etiqueta y su famoso logotipo “Old Nº 7”, cuyo significado sigue\r\nsiendo hoy en día un misterio, son reconocidos mundialmente.</p>",
*  "quote": "",
*  "quote_author": "",
*  "is_promo": "no",
*  "promo_type": "link",
*  "promo_link": "",
*  "promo_start_date": "0000-00-00",
*  "promo_end_date": "0000-00-00",
*  "created_at": "2015-07-13T06:48:40.000Z",
*  "updated_at": "2015-07-22T11:03:39.000Z"
* },
* {
*  "id": 23,
*  "publication_date": "2015-07-01T00:00:00.000Z",
*  "slug": "julio-2015",
*  "type": "banner",
*  "title_home": "",
*  "description_home": "",
*  "link": "",
*  "title": "",
*  "subtitle": "",
*  "description": "",
*  "quote": "",
*  "quote_author": "",
*  "is_promo": "no",
*  "promo_type": "link",
*  "promo_link": "",
*  "promo_start_date": "0000-00-00",
*  "promo_end_date": "0000-00-00",
*  "created_at": "2015-07-13T07:04:26.000Z",
*  "updated_at": "2015-07-13T08:03:59.000Z"
* }
*    ]
* }
*/
exports.findAll = function(req, res) {
    post.findAll(req.query.limit, req.query.offset, function (err, rows){
        if (err)
            res.send ({error: true, message: err});
        else
            res.send ({error: false, message: "success", posts: rows});
    });
};

/**
* @api {get} /posts/:id list singe post
* @apiVersion 1.0.0
* @apiGroup Posts
* @apiError {Boolean} error true
* @apiError {String} message Error message
* @apiSuccess {Boolean} error false
* @apiSuccess {String} message "success"
* @apiSuccess {Array} posts posts array
* @apiSuccessExample Success-Response:
* {
* "error": false,
* "message": "success",
* "posts": [
* {
*  "id": 22,
*  "publication_date": "2015-07-09T00:00:00.000Z",
*  "slug": "sobrejackdaniels",
* "type": "post",
*  "title_home": "EL AUTÉNTICO TENNESSEE WHISKEY",
*  "description_home": "",
*  "link": "",
*  "title": "JACK DANIEL’S OLD Nº7: EL AUTÉNTICO TENNESSEE WHISKEY",
*  "subtitle": "",
*  "description": "<p>Jack\r\nDaniel's se elabora en la destilería americana más antigua en Lynchburg,\r\nTennessee (EEUU) desde 1866. Su carácter independiente y genuino, unido a su\r\nsabor inconfundible, lo han convertido en el whiskey más vendido del mundo. Hecho\r\ncon agua de manantial pura y filtrado a través de 3 metros de carbón de arce,\r\nesta elaboración única lo diferencia de otros whiskeys americanos y bourbons.\r\nEl auténtico Tennessee Whiskey madura en barriles nuevos de roble americano\r\nfabricados por nuestros artesanos.</p>\r\n\r\n<p>A\r\ntravés de la historia, Jack Daniel’s se ha convertido en un símbolo de calidad,\r\nconsiguiendo 7 medallas de oro y convirtiendo su botella en todo un icono. Su\r\ncaracterística etiqueta y su famoso logotipo “Old Nº 7”, cuyo significado sigue\r\nsiendo hoy en día un misterio, son reconocidos mundialmente.</p>",
*  "quote": "",
*  "quote_author": "",
*  "is_promo": "no",
*  "promo_type": "link",
*  "promo_link": "",
*  "promo_start_date": "0000-00-00",
*  "promo_end_date": "0000-00-00",
*  "created_at": "2015-07-13T06:48:40.000Z",
*  "updated_at": "2015-07-22T11:03:39.000Z"
* }
* ]
* }
*/
exports.findById = function(req, res) {
    post.findById(req.params.id, function (err, rows){
        if (err)
            res.send ({error: true, message: err});
        else
            res.send ({error: false, message: "success", post: rows});
    });
};

/**
* @api {get} /posts/:id/medias List single post related medias
* @apiVersion 1.0.0
* @apiGroup Posts
* @apiParam limit limit results
* @apiParam offset offset
* @apiError {Boolean} error true
* @apiError {String} message Error message
* @apiSuccess {Boolean} error false
* @apiSuccess {String} message "success"
* @apiSuccess {Array} medias medias array
* @apiSuccessExample Success-Response:
* {
* "error": false,
* "message": "success",
* "medias": [
* {
*  "id": 1,
*  "post_id": 22,
*  "source": "/admin/web/uploaded/COVER_jackdanieln7_55a35f48219fa.png",
*  "image_source": "/admin/web/uploaded/COVER_jackdanieln7_55a35f48219fa.png",
*  "type": "image",
*  "style": "home",
*  "link": "",
*  "created_at": "2015-01-13T06:46:41.000Z",
*  "updated_at": "2015-02-03T03:24:04.000Z"
*  },
* {
*  "id": 2,
*  "post_id": 22,
*  "source": "/admin/web/uploaded/fichajd_7_55a361f11847f.png"",
*  "image_source": "/admin/web/uploaded/fichajd_7_55a361f11847f.png"",
*  "type": "image",
*  "style": "gallery",
*  "link": null,
*  "created_at": "2015-01-13T06:46:41.000Z",
*  "updated_at": "2015-02-03T03:24:04.000Z"
*  }
* ]
* }
*/

exports.findMedias = function(req, res) {
    post.findMedias(req.params.id, req.query.limit, req.query.offset, function (err, rows){
        if (err)
            res.send ({error: true, message: err});
        else
            res.send ({error: false, message: "success", medias: rows});
    });
};

/**
* @api {get} /posts/:id/categories List single post related categories
* @apiVersion 1.0.0
* @apiGroup Posts
* @apiParam limit limit results
* @apiParam offset offset
* @apiError {Boolean} error true
* @apiError {String} message Error message
* @apiSuccess {Boolean} error false
* @apiSuccess {String} message "success"
* @apiSuccess {Array} categories categories array
* @apiSuccessExample Success-Response:
* {
* "error": false,
* "message": "Success",
* "categories": [
* {
*  "id": 22,
*  "slug": "slug0",
*  "name": "Test name slug0",
*  "created_at": "2015-01-13T06:46:41.000Z",
*  "updated_at": "2015-02-03T03:24:04.000Z"
*  },
* {
*  "id": 23,
*  "slug": "slug2",
*  "name": "Test Name Slug",
*  "created_at": "2015-01-13T06:46:41.000Z",
*  "updated_at": "2015-02-03T03:24:04.000Z"
*  }
* ]
* }
*/
exports.findCategories = function(req, res) {
    post.findCategories(req.params.id, req.query.limit, req.query.offset, function (err, rows){
        if (err)
            res.send ({error: true, message: err});
        else
            res.send ({error: false, message: "success", categories: rows});
    });
};

/**
 * @api {get} /posts/:id/tags List single post related tags
 * @apiVersion 1.0.0
 * @apiGroup Posts
 * @apiParam limit limit results
 * @apiParam offset offset
 * @apiError {Boolean} error true
 * @apiError {String} message Error message
 * @apiSuccess {Boolean} error false
 * @apiSuccess {String} message "success"
 * @apiSuccess {Array} tags tags array
 * @apiSuccessExample Success-Response:
 * {
     * "error": false,
     * "message": "Success",
     * "tags": [
     * {
     *  "id": 1,
     *  "slug": "tag1",
     *  "created_at": "2015-01-13T06:46:41.000Z",
     *  "updated_at": "2015-02-03T03:24:04.000Z"
     *  },
     * {
     *  "id": 2,
     *  "slug": "tag2",
     *  "created_at": "2015-01-13T06:46:41.000Z",
     *  "updated_at": "2015-02-03T03:24:04.000Z"
     *  }
     * ]
     * }
 */
exports.findTags = function(req, res) {
    post.findTags(req.params.id, req.query.limit, req.query.offset, function (err, rows){
        if (err)
            res.send ({error: true, message: err});
        else
            res.send ({error: false, message: "success", tags: rows});
    });
};