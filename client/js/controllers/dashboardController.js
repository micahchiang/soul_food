soulFood.controller('dashboardController', function($scope, $routeParams, $location, userFactory, eventFactory, profileFactory){
  $scope.user = {};
  userFactory.checkLogin(function(response){
    console.log('check login', response);
    if(!response.data){
      $location.url('login');
    }
    $scope.user = response.data;
  });
  userFactory.getUser(function(data){
    console.log(data);
    $scope.userid = data;
  })
  console.log($scope.userid);
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
  var id= $scope.userid._id;
  console.log($scope.user._id);
  var getEventListById = function(id)
  {
    profileFactory.getEventsById(id,function(data)
    {
      $scope.events = data;
      console.log($scope.events);
    })
  }
  getEventListById(id);
  $scope.addEvent = function()
	{
    console.log($scope.newEvent);
		$scope.newEvent.user = $scope.userid;
    console.log($scope.newEvent.user);
		$scope.newEvent.events = 0;
		eventFactory.addEvent($scope.newEvent, function(){
			getEventListById(id);
		});
    $scope.newEvent = {};
	}
});
