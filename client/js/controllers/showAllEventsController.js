soulFood.controller('showAllEventsController', function($scope, $location, userFactory, eventFactory){
  $scope.user = {};

  // userFactory.getUser(function(data){
  //   console.log(data);
  //   $scope.user = data;
  // })

  userFactory.checkLogin(function(response){
    console.log('check login', response);
    if(!response.data){
      // alert('Please log in for full access');
    }
    $scope.user = response.data;
  });

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

  $scope.attendEvent = function(event){
    var currentUser = $scope.user;
    console.log(event, 'current event');
    console.log(currentUser, 'current user');
  }

});
