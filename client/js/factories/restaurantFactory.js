soulFood.factory('restaurantFactory' , function($http){
  // var user = {};
  // var error = {};
  // var loginError = {};
  return{
    addRestaurant : function(input, callback){
      // console.log('factory trying to create the user', input);
      // $http.post('/users', input).then(function(response){
      //   console.log(response);
      //   if(response.data.err){
      //     console.log('error!');
      //     loginError.message = response.data.err;
      //     console.log(error);
      //     callback(response.data);
      //   }
      // })
      console.log('adding biz in factory', input);
      $http.post('/addRestaurant', input).then(function(response){
        console.log(response);
      })

    },

    searchRestaurants: function(input, callback){
      console.log('searching with these terms', input);
      $http.post('/searchRestaurants', input).then(function(response){
        console.log(response);
        callback(response);
      })
    }
  }
})
