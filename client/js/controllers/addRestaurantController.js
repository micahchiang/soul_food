soulFood.controller('addRestaurantController', function($scope, restaurantFactory, userFactory){

  $scope.user = {};

  userFactory.checkLogin(function(response){
    console.log('check login', response);
    if(!response.data){
      $location.url('login');
    } else{
      userFactory.getUser(function(data){
        $scope.user = data;
      })
    }
  })

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
    input.currentUser = $scope.user
    restaurantFactory.addRestaurant(input, function(response){

    })
  }
});
