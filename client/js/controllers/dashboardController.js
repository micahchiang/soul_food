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
  function refreshUser(){
    userFactory.checkLogin(function(response){
      $scope.user = response.data;
    })
  }
  getAllUsers();
  function getAllUsers(){
    userFactory.getAllUsers(function(data){
      // console.log(data, 'all user data');
      console.log($scope.user, 'current user data');
      ///remove current user from available friend list
      var currentUser = $scope.user;
      for(var i = 0; i<data.length; i++){
        if(data[i]._id === currentUser._id){
          data.splice(i, 1);
        }
      }
      //this loop will run when current users length bigger than user's friends length
      if(data.length >= currentUser.friends.length){
         for(var j =0; j < data.length; j++){
          for(var k = 0; k < currentUser.friends.length; k++){
            if(data[j]._id === currentUser.friends[k]._id){
              data.splice(j, 1);
            }
          }

        }
        console.log(k);
        console.log(j);
      }
      // this loop will run when user's friends length is longer than users length
      else {
         for(var k =0; k < data.length; k++){
          for(var j = 0; j < currentUser.friends.length; j++){
            if(data[j]._id === currentUser.friends[j]._id){
              data.splice(k, 1);
            }
          }
        }
      }
      $scope.persons = data;
    })
  }

  $scope.addFriend = function(friend, user){
    // console.log(friend, 'in friend trying to add');
    // console.log(user, 'current user');
    console.log('HEY IM TRYING TO ADD A FRIEND!!!!');
    for(var i = 0; i<user.friends.length; i++){
        if(user.friends[i]._id === friend._id){
          // alert('You already friend with ' + friend.name);
          return;
        }
    }
    userFactory.addFriend(friend, user, function(response){
      // alert(friend.name + ' has been added to your friend list');
      console.log(response);
      console.log('just added a friend!');
      getAllUsers();
      refreshUser();
    });
    // console.log('YO IM GONNA ADD A FRIEND!!!');

  }

  $scope.removeFriend = function(friend, user){
    var friendId = friend._id;
      for(var i = 0; i<user.friends.length; i++){
        if(friendId === user.friends[i]._id){
          var friend_index = i;
        }
      }
    userFactory.removeFriend(friendId, user._id, friend_index, function(response){
      console.log(response);
      getAllUsers();
      refreshUser();
    })
    // $location.url('dashboard');
  }

  $scope.logout = function(){
    userFactory.logoutUser();
    $location.url('/');
  }
  // function dateFormat(dateToFormat)
	// {
	// 	var date = new Date(dateToFormat);
	// 	var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	// 	var month = monthNames[date.getMonth()];
	// 	var day = date.getDate();
	// 	var year = date.getFullYear();
	// 	var newDate = month + ' ' + day + ' ' + year;
	// 	return newDate;
	// }

  // myapp.filter('dateFormat', function($filter)
  // {
  //  return function(input)
  //  {
  //   if(input == null){ return ""; }
  //
  //   var _date = $filter('date')(new Date(input), 'MMM dd yyyy');
  //
  //   return _date.toUpperCase();
  //
  //  };
  // });

  //jquery methods for datepicker and time picker
  //$("#event-date").datepicker({minDate:1});
  //$('#event-time').timepicker({minTime:'6:00AM', maxTime:'11:00PM', disableTextInput: true});

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
    //$scope.newEvent.time= $('#event-time').val();
    //$scope.newEvent.date= $('#event-date').val();
    console.log($scope.newEvent.user);
		$scope.newEvent.events = 0;
		eventFactory.addEvent($scope.newEvent, function(){
			getEventListById(id);
		});
    $scope.newEvent = {};
	}
});
