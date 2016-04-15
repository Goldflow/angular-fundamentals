//bring in express library
//this require call grabs the express library and makes it available in this file
var express = require("express");
var path = require('path');

//link the eventscontroller, another server script
var events = require('./eventsController');


//create express application by calling express function
var app = express();
//create root path variable by calling path.normalize(__dirname);
//which is a variable which points to the current directory, which in our case is going to be µ
// the scripts directory that our webserver.js is inside of
// and add to that /../ whill take me up a directory (root of application)
var rootPath = path.normalize(__dirname + '/../');

//https://www.quora.com/What-exactly-does-body-parser-do-with-express-js-and-why-do-I-need-it
//to install bodyParser > npm install body-parser
var bodyParser = require('body-parser');
//now we need to use body-parser so our webserver knows
// how to pull JSON correctly from the request body and parse it correctly
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//static function serves the pages in a given directory, without processing them at all
//just passing them as they are
app.use(express.static(rootPath + '/app'));

//usually, we would get our data from a server
//but now we'll get it straight from disk
//these get & post methods will be defined in the eventscontroller
app.get('/data/event/:id',events.get);
app.post('/data/event/:id', events.save);

//tell app to listen on a specific port
app.listen(8000);
console.log("Listening on port 8000....");