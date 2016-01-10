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
      //check if it already exists in the db update the data-
      Restaurant.findOne({id: req.body.id}, function(err, foundRestaurant){
        // console.log('found the same restaurant trying to update');
        if(err){
          console.log('error finding restaurant', err);
          res.json(err);
        }
        if(foundRestaurant == null){
          console.log('restaurant isnt in db yet! make a new one')
          // res.json(true);
          var newRestaurant = new Restaurant({
            categories: req.body.categories,
            display_phone: req.body.display_phone,
            image_url: req.body.image_url,
            location: req.body.location,
            name: req.body.name,
            rating: req.body.rating,
            rating_img_url: req.body.rating_img_url,
            url: req.body.url,
            id: req.body.id
          });
          newRestaurant.save(function(err){
            if(err){
              return res.json({err: err});
            } else {
              return res.json(true);
            }
          })
        } else {
          // foundRestaurant = req.body;
          console.log('this is the found restaurant', foundRestaurant);
          foundRestaurant.categories = req.body.categories;
          foundRestaurant.display_phone = req.body.display_phone;
          foundRestaurant.image_url = req.body.image_url;
          foundRestaurant.location = req.body.location;
          foundRestaurant.name = req.body.name;
          foundRestaurant.rating = req.body.rating;
          foundRestaurant.rating_img_url = req.body.rating_img_url;
          foundRestaurant.url = req.body.url
          foundRestaurant.id = req.body.id;
          foundRestaurant.save(function(err){
            if(err){
              return res.json({err: err});
            } else {
              console.log('success updating');
              return res.json(true);
            }
          })
        }
      })
    },
    getAllRestaurants: function(req, res){
      Restaurant.find({}, function(err, restaurants){
        if(err){
          res.json({err: err});
        } else {
          res.json(restaurants);
        }
      })
    },
    getRestaurant: function(req, res){
      Restaurant.findOne({_id: req.params.id}, function(err, results){
				if(err) {
					res.json({status:'failed', err:err})
				} else {
					res.json(results);
				}
      })
		},
    removeRestaurant: function(req, res){
      //TODO:
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
