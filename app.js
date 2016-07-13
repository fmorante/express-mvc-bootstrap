var express = require('express'),
    auth = require('http-auth'),
    config = require('config'),
    bodyParser = require('body-parser'),
    i18n = require("i18n"),
    fs = require('fs'),
    log4js = require('log4js'),
    app = express();

// authentication parameters
var basic = auth.basic({
        realm: "JD_API"
    }, function (username, password, callback) {
        // Custom authentication
        // Use callback(error) if you want to throw async error.
        callback(username === config.get('auth.username') && password === config.get('auth.password'));
    }
);
app.use(auth.connect(basic));

// log4js logger
fs.existsSync(__dirname + config.get('logger.directory')) || fs.mkdirSync(__dirname + config.get('logger.directory'));
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file(__dirname + config.get('logger.directory') + '/' + config.get('logger.filename')), 'logger');
var logger = log4js.getLogger('logger');
logger.setLevel(config.get('logger.mode'));
app.use(log4js.connectLogger(logger, { level: config.get('logger.mode')}));

// localization
i18n.configure({
    locales: ['en', 'es'],
    fallbacks: {'de': 'en'},
    directory: __dirname + '/locales'
});
app.use(i18n.init);

// request body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// enable CORS
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// posts
var posts = require('./routes/posts.js');
app.get('/posts', posts.findAll);
app.get('/posts/:id', posts.findById);
app.get('/posts/:id/medias', posts.findMedias);
app.get('/posts/:id/categories', posts.findCategories);
app.get('/posts/:id/tags', posts.findTags);
app.get('/posts/slug/:slug', posts.findBySlug);

// categories
var categories = require('./routes/categories.js');
app.get('/categories', categories.findAll);
app.get('/categories/:id', categories.findById);
app.post('/categories', categories.create);
app.put('/categories/:id', categories.update);
app.delete('/categories/:id', categories.delete);
app.get('/categories/:slug/posts', categories.findPostsBySlug);

// users
var users = require('./routes/users.js');
app.post('/users', users.create);

// db connection & listen
var pool = require ('./models/db');
pool.connect(function(err){
    if (err) {
        console.log(i18n.__('Unable to connect to MySQL.'));
        // exit
    } else {
        app.listen(3000, function(err) {
            if (err) app.exit();
            console.log(i18n.__('Server running at port 3000'));
        })
    }
});