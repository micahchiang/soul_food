soulFood.controller('showAllEventsController', function($scope, $location, userFactory, eventFactory){
  $scope.user = {};

  userFactory.getUser(function(data){
    console.log(data);
    $scope.user = data;
  })

  userFactory.checkLogin(function(response){
    console.log('check login', response);
    if(!response.data){
      $location.url('login');
    }
    $scope.user = response.data;
    getEventList($scope.user._id);
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
  function getEventList(id) {
    console.log(id, 'current user id');
		eventFactory.getEvents(function(data) {
      console.log(data, 'data coming back');
			$scope.events = data;
      console.log($scope.events);
		})
	}

  $scope.attendEvent = function(event){
    var currentUser = $scope.user;
    if(currentUser._id === event.user._id){
      alert('You cannot attend your own event');
      return;
    }

    eventFactory.getEvents(function(data) {
      for(var i = 0; i< data.length; i++){
        for(var k = 0; k < data[i].attenders.length; k++){
          if(currentUser._id === data[i].attenders[k]._id){
            alert('You are attending this event');
            return;
          }
        }
      }
    })
    eventFactory.attendEvent(event, currentUser);
    console.log(event, 'current event');
    console.log(currentUser, 'current user');
  }
});
