soulFood.controller('showAllEventsController', function($scope, $location, userFactory, eventFactory){
  $scope.user = {};
  userFactory.getUser(function(data){
    console.log(data);
    $scope.user = data;
  })

  userFactory.getAllUsers(function(data){
    console.log(data, 'all user data');
    $scope.persons = data;
  })
  $scope.logout = function(){
    userFactory.logoutUser();
    $location.url('/');
  }
  $scope.events =[];
  var getEventList = function() {
		eventFactory.getEvents(function(data) {
			$scope.events = data;
      console.log($scope.events);
		})
	}
  getEventList();

});
