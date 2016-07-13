# express-mvc-bootstrap
A MVC boilerplate for Express.js

## Structure
- package.json: 
- app.js: main express app including routing
- /config/enviroment.json: config file for every enviroment (development, production, etc.)
- /routes/feature.js: controllers for every feature
- /models/feature.js: models for every feature
- /specs/feature.js: jasmine/frisby test for every feature endpoint
- /locales/ISO-lang.json: translations
- /data/dummy.sql: dummy data
- apidoc.json: config file for apidoc
- /doc: autogenerated doc based on apidoc
- /log: logging

## TODO
- ~~apidoc~~
- ~~locales~~
- ~~common pool for every DB connection~~
- global logfile & localizaton
- server control error

## Running & scripts
1. ```npm install``` -- install node modules & dependencies
2. ```npm start``` -- start server
3. ```npm run test``` -- run jasmine / frisby test
4. ```npm run doc``` -- output docs into doc directory