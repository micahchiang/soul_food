var mongoose = require('mongoose');
var Yelp = require('yelp');
var yelp = new Yelp({
  consumer_key: "1pDdwYrTx--Gp0lHnVVuSw",
  consumer_secret: "qbIU6lyygVC_adOrtbSUHU6W9I8",
  token: "cKlvZGvUjcsnCQYjT_KEz-3bWVbJWm-p",
  token_secret: "JeoIWIF2Okwwuxjv5YDvhfjQ9j4"
});
var Restaurant = mongoose.model('Restaurant');
module.exports = (function(){
  return{
    addRestaurant: function(req, res){
      console.log('req.body', req.body);
      res.json(true);
    },
    getAllRestaurants: function(req, res){

    },
    addFriend: function(req, res){

    },
    showRestaurant: function(req, res){

		},
    removeFriend: function(req, res){

    },
    searchRestaurants: function(req,res){
      console.log('searching with this', req.body);
      //https://www.yelp.com/developers/documentation/v2/search_api
      yelp.search({ term: req.body.find, location: req.body.location })
      .then(function (data) {
        res.json(data);
      })
      .catch(function (err) {
      });
    }
  }
})();
