module.exports.api = require('./apiController');
module.exports.listings = require('./listingsController');

var mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI || "mongodb://<dbuser>:<dbpassword>@ds127173.mlab.com:27173/heroku_mqrs4cp1");
