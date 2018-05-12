'use strict';
var path = require("path");

var express = require('express'),
  app = express(),
  port = process.env.PORT || 5000,
  mongoose = require('mongoose'),
  Tags = require('./api/models/tagsModel'), //created model loading here
  bodyParser = require('body-parser');

// Setup the app to serve static html stuff from the select path
//app.use(express.static(path.join(__dirname,'/')));

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TagsDb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//app.use(function(req, res) {
//  res.status(404).send({url: req.originalUrl + ' not found'})
//});


var routes = require('./api/routes/tagsRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('Tags RESTful API server started on: ' + port);