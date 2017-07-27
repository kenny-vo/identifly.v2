
var express = require('express');

var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/vendor', express.static(__dirname + '/bower_components'));

var controllers = require('./controllers');
var mongoose = require('mongoose');


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


// ALL OTHER ROUTES

app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/**********
 * SERVER *
 **********/

app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
