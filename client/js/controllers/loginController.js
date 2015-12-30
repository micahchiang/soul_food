soulFood.controller('loginController', function($scope, $location, userFactory){
  $scope.registeredUser = {};
  $scope.error = {};
  $scope.loginError = {};
  userFactory.checkLogin(function(response){
    console.log(response);
    if(response.data){
      userFactory.logoutUser();
    }
  });
  $scope.createUser = function(input){
    console.log('make this new user', input);
    //call factory
    if(input.password !== input.confirmPassword){
      $scope.loginError.message = 'Passwords do not match!';
      return;
    }
    $scope.newUser.events =0;
    $scope.newUser.comments=0;
    userFactory.createUser(input, function(response){
      console.log(response);
      if(response.err){
        console.log('there was an error!');
        $scope.loginError.message = response.err;
      }
    })
    $scope.newUser = {};

  }

  $scope.loginUser = function(input){
    console.log('trying to login user with', input);
    //call factory
    userFactory.loginUser(input, function(response){
      console.log(response);
      if(response.err){
        console.log('there was an error!');
        $scope.error.message = response.err;
      } else {
        console.log('no error, log them in');
        $location.url('/dashboard');
      }
    })
    $scope.userData = {};
  }
});
