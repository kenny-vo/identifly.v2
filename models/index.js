var mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/tunely-test");

module.exports.User = require('./user');
module.exports.Listing = require('./listing');
