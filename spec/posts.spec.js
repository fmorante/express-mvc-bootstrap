var frisby = require('frisby');
var URL = 'http://localhost:3000';
var item = 0;
var query = '?limit=1&offset=0';

frisby.globalSetup({ // globalSetup is for ALL requests 
  request: {
    headers: { 'Authorization': 'Basic Zm1vcmFudGU6Zm1vcmFudGU=' }
  }
});

frisby.create('GET posts - GET single post - GET post related categories - GET post related media - GET post related tags - GET post from slug')
    .get(URL + '/posts' + query)
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSONTypes({
        error: Boolean,
        message: String,
        posts: Array
    })
    .expectJSON({
        error: false,
        message: 'success'
    })
    .afterJSON (function (response){
    item = response.posts[0].id;
    frisby.create('GET single post')
        .get(URL + '/posts/' + item)
        .expectStatus(200)
        .expectHeaderContains('content-type', 'application/json')
        .expectJSONTypes({
            error: Boolean,
            message: String,
            post: Array
        })
        .expectJSON({
            error: false,
            message: 'success'
        })
        .toss();

    frisby.create('GET post related categories')
        .get(URL + '/posts/' + item + '/categories' + query)
        .expectStatus(200)
        .expectHeaderContains('content-type', 'application/json')
        .expectJSONTypes({
            error: Boolean,
            message: String,
            categories: Array
        })
        .expectJSON({
            error: false,
            message: 'success'
        })
        .toss();

    frisby.create('GET post related media')
        .get(URL + '/posts/' + item + '/medias' + query)
        .expectStatus(200)
        .expectHeaderContains('content-type', 'application/json')
        .expectJSONTypes({
            error: Boolean,
            message: String,
            medias: Array
        })
        .expectJSON({
            error: false,
            message: 'success'
        })
        .toss();

    frisby.create('GET post from slug')
        .get(URL + '/posts/slug/sobrejackdaniels')
        .expectStatus(200)
        .expectHeaderContains('content-type', 'application/json')
        .expectJSONTypes({
            error: Boolean,
            message: String,
            post: Array
        })
        .expectJSON({
            error: false,
            message: 'success'
        })
        .toss();
    })
    .toss();

