soulFood.controller('addRestaurantController', function($scope, restaurantFactory){

  $scope.searchRestaurants = function(input){
    // console.log(input);
    restaurantFactory.searchRestaurants(input, function(response){
      console.log(response);
      $scope.searchResults = response.data.businesses;
      console.log('scope searchresults', $scope.searchResults);
    })
  }

  $scope.addRestaurant = function(input){
    // console.log(input);
    restaurantFactory.addRestaurant(input, function(response){

    })
  }
});
