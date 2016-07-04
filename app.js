var express = require("express"),
    auth = require('http-auth'),
    config = require("config"),
    log4js = require("log4js"),
    bodyParser = require('body-parser'),
    i18n = require("i18n");

// requires logger module
var app = express();

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

// logger init
log4js.loadAppender('file');
log4js.addAppender(log4js.appenders.file(config.get('logger.file')), 'logger');
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

// posts
var posts = require('./routes/posts.js');
app.get('/posts', posts.findAll);
app.get('/posts/:id', posts.findById);
app.get('/posts/:id/medias', posts.findMedias);
app.get('/posts/:id/categories', posts.findCategories);
app.get('/posts/:id/tags', posts.findTags);

// categories
var categories = require('./routes/categories.js');
app.get('/categories', categories.findAll);
app.get('/categories/:id', categories.findById);
app.post('/categories', categories.create);
app.put('/categories/:id', categories.update);
app.delete('/categories/:id', categories.delete);

// users
var users = require('./routes/users.js');
app.post('/users', users.create);

// listen
app.listen(3000);
console.log(i18n.__('Server running at port 3000'));