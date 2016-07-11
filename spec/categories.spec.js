var frisby = require('frisby');
var URL = 'http://localhost:3000';
var item = 0;
var query = '/?limit=1&offset=0';

frisby.globalSetup({ // globalSetup is for ALL requests 
  request: {
    headers: { 'Authorization': 'Basic Zm1vcmFudGU6Zm1vcmFudGU=' }
  }
});

frisby.create('GET categories - GET single category - POST category - PUT category - DELETE category')
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
    frisby.create('GET single category')
        .get(URL + '/categories/' + item)
        .expectStatus(200)
        .expectHeaderContains('content-type', 'application/json')
        .expectJSONTypes({
            error: Boolean,
            message: String,
            category: Array
        })
        .expectJSON({
            error: false,
            message: 'success'
        })
        .toss();

        frisby.create('POST category')
            .post(URL + '/categories' ,
            {slug: "slug-test-jasmine",
             name: "name-test-jasmine"
            })
            .expectStatus(201)
            .expectHeaderContains('content-type', 'application/json')
            //.expectHeaderContains('location', '*categories*')
            .expectJSONTypes({
                error: Boolean,
                message: String
            })
            .expectJSON({
                error: false,
                message: 'success'
            })
            .afterJSON (function (res) {
                item = this.current.response.headers['location'];
                frisby.create('PUT categories')
                    .put('http://' + item, {
                        slug: "slug-test-jasmine-update",
                        name: "name-test-jasmine-update"
                    })
                    .expectStatus(201)
                    .expectHeaderContains('content-type', 'application/json')
                    .expectJSONTypes({
                        error: Boolean,
                        message: String
                    })
                    .expectJSON({
                        error: false,
                        message: 'success'
                    })
                    .toss();

                // test DELETE /categories/:id
                frisby.create('DELETE categories')
                    .delete('http://' + item)
                    .expectStatus(201)
                    .expectHeaderContains('content-type', 'application/json')
                    .expectJSONTypes({
                        error: Boolean,
                        message: String
                    })
                    .expectJSON({
                        error: false,
                        message: 'success'
                    })
                    .toss();
             })
         .toss();
    })
    .toss();


