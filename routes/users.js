var users = require('../models/user.js');

var codes = {
    'SUCCESSFULL_GENERIC_HTTP_CODE': 200,
    'CREATED_HTTP_CODE': 201,
    'UPDATED_HTTP_CODE': 201,
    'DELETED_HTTP_CODE': 201,
    'NOT_FOUND_HTTP_CODE': 204,
    'GENERIC_ERR': 400
};
/**
* @api {post} /users Create user
* @apiVersion 1.0.0
* @apiGroup Users
* @apiParam {String} name name
* @apiParam {String} surname surname
* @apiParam {Date} birth birthdate ('MM/DD/YYYY')
* @apiParam {String} email email
* @apiParam {String} city city
* @apiParam {Number} country country
* @apiParam {String} bar bar
* @apiParam {String} address address
* @apiParam {String} phone phone
* @apiParam {Number} capacity capacity
* @apiParam {String} message message
* @apiParam {Number} capacity capacity
* @apiParam {Enum} type contact | promo
* @apiParam {Number} postId related postId
* @apiError (400) {Boolean} error true
* @apiError (400) {String} message Error message
* @apiSuccess (201) {Boolean} error false
* @apiSuccess (201) {String} message "success"
* @apiSuccessExample (201) Success-Response:
* Header-Location: {HOST}/users/2
* {
*   "error": false,
*   "message": "success"
* }
*/
exports.create = function(req, res) {
    users.create(req.body.name, req.body.surname, req.body.birth, req.body.email, req.body.city, req.body.country, req.body.bar, req.body.address, req.body.phone, req.body.capacity, req.body.message, req.body.type, req.body.postid, function (err, rows){
        if (err)
            res.type('json')
                .status(codes['GENERIC_ERR'])
                .send ({error: true, message: err});
        else
            res.type('json')
                .status(codes['CREATED_HTTP_CODE'])
                .location(req.get('host') + '/users/' + rows.insertId)
                .send ({error: false, message: "success"});
    });
};
