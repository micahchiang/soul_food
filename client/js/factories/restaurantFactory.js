soulFood.factory('restaurantFactory' , function($http){
  return{
    addRestaurant : function(input, callback){
      console.log('adding biz in factory', input);
      $http.post('/addRestaurant', input).then(function(response){
        console.log(response);
        callback(response);
      })
    },
    searchRestaurants: function(input, callback){
      console.log('searching with these terms', input);
      $http.post('/searchRestaurants', input).then(function(response){
        console.log(response);
        callback(response);
      })
    },
    getRestaurant: function(id, callback){
      $http.get('/getRestaurant/' + id).then(function(response){
        console.log(response);
        callback(response);
      })
    },
    getAllRestaurants: function (callback){
      $http.get('/getAllRestaurants').then(function(output){
        console.log(output, 'output in user factory');
        callback(output);
      })
    },
  }
})
