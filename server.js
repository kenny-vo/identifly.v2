
var express = require('express');

var app = express();
var bodyParser = require('body-parser');

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/vendor', express.static(__dirname + '/bower_components'));

var controllers = require('./controllers');

/**********
 * ROUTES *
 **********/

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('*', function homepage (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/**********
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is running on http://localhost:3000/');
});
