soulFood.controller('chatController', function($scope, userFactory, $location){
	// socket.emit('message',{msg: 'im in chat'});
	// $scope.on('$locationChangeStart', function(event){
	// 	// Socket.disconnect(true);
	// })

	$scope.user = {};
	$scope.messages ='';

  	userFactory.getUser(function(data){
    console.log(data);
    $scope.user = data;
  })
  // if(!$scope.user.email){
  //   $location.url('login');
  // }
  userFactory.getAllUsers(function(data){
    console.log(data, 'all user data');
    $scope.persons = data;
  })

  $scope.createMessage = function(input){
  	input.user = $scope.user.name;
  	console.log('user trying to post', input);
  	socket.emit('message', input);
  }
});