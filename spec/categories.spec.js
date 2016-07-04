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
            .expectStatus(200)
            .expectHeaderContains('content-type', 'application/json')
            .expectJSONTypes({
                error: Boolean,
                message: String,
                id: Number
            })
            .expectJSON({
                error: false,
                message: 'success'
            })
            .afterJSON (function (response) {
                // test PUT /categories/:id
                console.log(response.id);
                frisby.create('PUT categories')
                    .put(URL + '/categories/' + response.id, {
                        slug: "slug-test-jasmine-update",
                        name: "name-test-jasmine-update"
                    })
                    .expectStatus(200)
                    .expectHeaderContains('content-type', 'application/json')
                    .expectJSONTypes({
                        error: Boolean,
                        message: String,
                        changedRows: Number,
                        affectedRows: Number
                    })
                    .expectJSON({
                        error: false,
                        message: 'success',
                        changedRows: 1,
                        affectedRows: 1
                    })
                    .toss();

                // test DELETE /categories/:id
                frisby.create('DELETE categories')
                    .delete(URL + '/categories/' + response.id)
                    .expectStatus(200)
                    .expectHeaderContains('content-type', 'application/json')
                    .expectJSONTypes({
                        error: Boolean,
                        message: String,
                        affectedRows: Number
                    })
                    .expectJSON({
                        error: false,
                        message: 'success',
                        affectedRows: 1
                    })
                    .toss();
             })
         .toss();
    })
    .toss();


