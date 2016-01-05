//yelp
var yelp = require('node-yelp');
var client = yelp.createClient({
  oauth: {
    "consumer_key": "1pDdwYrTx--Gp0lHnVVuSw",
    "consumer_secret": "qbIU6lyygVC_adOrtbSUHU6W9I8",
    "token": "cKlvZGvUjcsnCQYjT_KEz-3bWVbJWm-p",
    "token_secret": "JeoIWIF2Okwwuxjv5YDvhfjQ9j4"
  },

  //optional settings:
  httpClient:{
    maxSockets: 1 //default is 10
  }
})
// app.get('/yelptest', function(req, res){
//   // console.log('YEEEEELP');
//   // client.search({
//   //   terms: "Café de la presse",
//   //   location: "BELGIUM"
//   // }).then(function (data) {
//   //   var businesses = data.businesses;
//   //   var location = data.region;
//   //   console.log('here is sample yelp data!', data);
//   client.business('urban-curry-san-francisco', {
//     cc: 'US'
//   }).then(function(data){
//     // console.log('YO THIS IS A BIZNESS.... MAN', data);
//     console.log(data.reviews);
//   })
//     // ...
//   // });
// })
