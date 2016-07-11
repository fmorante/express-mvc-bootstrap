var frisby = require('frisby');
var URL = 'http://localhost:3000';
var item = 0;
var query = '/?limit=1&offset=0';

frisby.globalSetup({ // globalSetup is for ALL requests 
  request: {
    headers: { 'Authorization': 'Basic Zm1vcmFudGU6Zm1vcmFudGU=' }
  }
});

frisby.create('POST user')
    .post(URL + '/users' ,
    {"name": "test-user", "surname": "test-surname", "birth": "01/15/1977", "email": "test@email.com", "city": "test-city", "country": 2,
        "bar": "test-bar", "address": "test-address", "phone": "test-phone", "capacity": 100, "message": "test-message", "type": "contact", "postId": 22})
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

