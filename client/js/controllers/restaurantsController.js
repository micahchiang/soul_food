soulFood.controller('restaurantsController', function($scope, $sce, $routeParams, restaurantFactory)
{
  restaurantFactory.getAllRestaurants(function(response){
    console.log(response);
    $scope.restaurants = response.data;
  })
});
