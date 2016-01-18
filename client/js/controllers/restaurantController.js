soulFood.controller('restaurantController', function($scope, $sce, $routeParams, restaurantFactory, userFactory){
  
  userFactory.getUser(function(data){
    console.log(data, 'in restaurant controller')
    console.log($routeParams.id, 'current restaurant id');
    for(var i = 0; i < data.favorite_restaurants.length; i++){
      // console.log(data.favorite_restaurants[i]._id, 'id of all restaurants')
      if(data.favorite_restaurants[i]._id == $routeParams.id){
        $scope.restaurant = data.favorite_restaurants[i];
        var restaurant = data.favorite_restaurants[i];
      }
    }
    console.log(restaurant, 'current restaurant in restaurant controller');
    $scope.googleURL = "https://www.google.com/maps/embed/v1/place?key=AIzaSyD3BqoHAivPm0JxoqTntNQZfQaf76tXNng&q=";
    for(var i = 0; i < restaurant.location.display_address.length; i++){
      $scope.googleURL += restaurant.location.display_address[i].replace(/\s/g,'');
    }
    $scope.trustedURL = $sce.trustAsResourceUrl($scope.googleURL);
  })
}); 

