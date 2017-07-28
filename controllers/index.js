module.exports.api = require('./apiController');
module.exports.listings = require('./listingsController');

var mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI );
