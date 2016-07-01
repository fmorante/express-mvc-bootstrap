var frisby = require('frisby');
var URL = 'http://localhost:3000';
var item = 0;
var query = '/?limit=1&offset=0';

frisby.globalSetup({ // globalSetup is for ALL requests 
  request: {
    headers: { 'Authorization': 'Basic Zm1vcmFudGU6Zm1vcmFudGU=' }
  }
});

// test if server is running
frisby.create('Server running')
    .get(URL + '/categories')
    .expectStatus(200)
    .toss();

frisby.create('GET categories')
    .get(URL + '/categories' + query)
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
    .afterJSON (function (response){
    item = response.categories[0].id;
    })
    .toss();

frisby.create('GET single category')
    .get(URL + '/categories/' + item)
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

/*// test POST /categories
frisby.create('POST category')
    .post(URL + '/categories' , {
        slug: "slug-test-jasmine",
        name: "name-test-jasmine"
    })
    .expectStatus(200)
    .expectHeaderContains('content-type', 'application/json')
    .expectJSONTypes({
        error: Boolean,
        message: String
    })
    .expectJSON({
        error: false,
        message: 'success'
    })
    .afterJSON (function (response) {
        item = response.categories.id;
    })
    .toss();
/*
// test PUT /categories/:id
frisby.create('PUT categories')
    .put(URL + '/categories/' + item, {
        slug: "slug-test-jasmine-update",
        name: "name-test-jasmine-update"
    })
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

// test DELETE /categories/:id
frisby.create('DELETE categories')
    .delete(URL + '/categories/' + item)
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
    .toss();*/
