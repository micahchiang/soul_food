soulFood.controller('restaurantsController', function($scope, $location, userFactory, restaurantFactory){

  $scope.currentUser = {};

  userFactory.checkLogin(function(response){
    if(!response.data){
      $location.url('login');
    } else{
      userFactory.getUser(function(data){
        $scope.currentUser = data
        $scope.restaurants = data.favorite_restaurants;
      })
    }
  })
  refreshUser();
  function refreshUser(){
    userFactory.checkLogin(function(response){
      console.log(response, 'in refresh user restaurants controller')
    $scope.currentUser = response.data;
    $scope.restaurants = response.data.favorite_restaurants;
    })
  }

  $scope.removeRestaurant = function(restaurant){
    var currentUserId = $scope.currentUser._id;
    restaurantFactory.removeRestaurant(restaurant, currentUserId, function(response){
      console.log(response,'response from remove restaurant')
      refreshUser();
    })
  }

  // restaurantFactory.getAllRestaurants(function(response){
  //   console.log(response);
  //   $scope.restaurants = response.data;
  // })
});
