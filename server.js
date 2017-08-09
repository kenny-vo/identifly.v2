
var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var hbs = require('hbs');
var auth = require('./resources/auth');

var app = express();
var controllers = require('./controllers');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/vendor', express.static(__dirname + '/bower_components'));

// require and load dotenv
require('dotenv').load();

/**********
 * ROUTES *
 **********/

 /*
  * HTML Endpoints
  */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/templates/:name', function templates(req, res) {
  var name = req.params.name;
  res.sendFile(__dirname + '/views/templates/' + name + '.html');
});


/*
 * JSON API Endpoints
 */
app.get('/api', controllers.api.index);

app.get('/api/listings', controllers.listings.index);
app.get('/api/listings/:listingId', controllers.listings.show);
app.post('/api/listings', controllers.listings.create);
app.delete('/api/listings/:listingId', controllers.listings.destroy);
// app.put('/api/albums/:albumId', controllers.albums.update);

app.post('/auth/signup', controllers.users.signup);
app.post('/auth/login', controllers.users.login);


// ALL OTHER ROUTES

app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

/**********
 * SERVER *
 **********/

 app.listen(process.env.PORT || 3000, function () {
   console.log('Express server is running on http://localhost:3000/');
 });
