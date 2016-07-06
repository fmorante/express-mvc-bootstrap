var users = require('../models/user.js');

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
    users.create(req.body.name, req.body.surname, req.body.birth, req.body.email, req.body.city, req.body.country, req.body.bar, req.body.address, req.body.phone, req.body.capacity, req.body.message, req.body.type, req.body.postid, function (err, rows){
        if (err)
            res.send ({error: true, message: err});
        else
            res.send ({error: false, message: "success", id: rows.insertId});
    });
};
