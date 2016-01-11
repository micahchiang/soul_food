soulFood.controller('chatController', function($scope, userFactory, $location){

  $scope.user = {};

  userFactory.checkLogin(function(response){
    console.log('check login', response);
    if(!response.data){
      $location.url('login');
    } else{
      userFactory.getUser(function(data){
        $scope.user = data;
        socket.emit('history', data);
      })
    }
  });

	userFactory.getUser(function(data){
    console.log(data, 'in chat controller');
    $scope.user = data;
  })


  // $scope.getHistory = function(){
  //   console.log('in get history controller');
  //   userFactory.getUser(function(data){
  //     socket.emit('history', data);
  //   })
  // }

  $scope.createMessage = function(input){
  	input.user = $scope.user.name;
  	console.log('user trying to post', input);
  	socket.emit('message', input);
    $scope.newMessage = {};
  }

});
