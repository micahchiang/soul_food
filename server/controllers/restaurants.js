var mongoose = require('mongoose');
var yelp = require('node-yelp');
var client = yelp.createClient({
  oauth: {
    "consumer_key": "1pDdwYrTx--Gp0lHnVVuSw",
    "consumer_secret": "qbIU6lyygVC_adOrtbSUHU6W9I8",
    "token": "cKlvZGvUjcsnCQYjT_KEz-3bWVbJWm-p",
    "token_secret": "JeoIWIF2Okwwuxjv5YDvhfjQ9j4"
  },

  //optional settings:
  // httpClient:{
  //   maxSockets: 10 //default is 10
  // }
})
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
      client.search({
        terms: req.body.find,
        location: req.body.location
      }).then(function (data) {
        var businesses = data.businesses;
        var location = data.region;
        console.log(data);
        res.json(data);
        // ...
      });

    }
  }
})();
