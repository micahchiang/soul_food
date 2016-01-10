soulFood.controller('restaurantController', function($scope, $sce, $routeParams, restaurantFactory)
{
  restaurantFactory.getRestaurant($routeParams.id, function(response){
    console.log(response);
    $scope.restaurant = response.data;
    $scope.googleURL = "https://www.google.com/maps/embed/v1/place?key=AIzaSyD3BqoHAivPm0JxoqTntNQZfQaf76tXNng&q=";
    for(var i = 0; i < response.data.location.display_address.length; i++){
      $scope.googleURL += response.data.location.display_address[i].replace(/\s/g,'');
    }
    //https://docs.angularjs.org/api/ng/service/$sce
    //set as trusted url so we can load it in iframe
    $scope.trustedURL = $sce.trustAsResourceUrl($scope.googleURL);
  })
});
