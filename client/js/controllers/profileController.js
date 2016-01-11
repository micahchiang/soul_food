soulFood.controller('profileController', function($scope, $routeParams,  profileFactory){
	$scope.userdata = [];
	console.log($routeParams.id);
	var id = $routeParams.id;

	var getUser = function(id){
		profileFactory.getUser(id, function(data){
			$scope.userdata = data;
			console.log($scope.userdata);
		});
	}

	getUser(id);

  $scope.events =[];
  var getEventListById = function(id){
		console.log(id);
    profileFactory.getEventsById(id,function(data){
      $scope.events = data;
      console.log($scope.events);
    })
  }

  getEventListById(id);
});
