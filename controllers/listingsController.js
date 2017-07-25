/************
 * DATABASE *
 ************/

 var db = require('../models');

 // GET /api/listings
function index (req, res) {
  db.Listing.find({}, function(err, allListings) {
    res.json(allListings);
  });
}

module.exports = {
  index: index
}
