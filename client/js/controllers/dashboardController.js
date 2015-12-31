soulFood.controller('dashboardController', function($scope, $location, userFactory, eventFactory){
  $scope.user = {};
  userFactory.checkLogin(function(response){
    console.log('check login', response);
    if(!response.data){
      $location.url('login');
    }
    $scope.user = response.data;
  });
  userFactory.getAllUsers(function(data){
    console.log(data, 'all user data');
    $scope.persons = data;
  })
  $scope.addFriend = function(friend, user){
    userFactory.addFriend(friend, user, function(response){
    })
  }
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
  $scope.addEvent = function()
	{
    console.log($scope.newEvent);
		$scope.newEvent.user = $scope.user;
    console.log($scope.newEvent.user);
		$scope.newEvent.posts = 0;
		eventFactory.addEvent($scope.newEvent, function(){
			getEventList();
		});
    $scope.newEvent = {};
	}
});
