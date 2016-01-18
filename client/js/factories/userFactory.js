soulFood.factory('userFactory' , function($http){
  var user = {};
  var error = {};
  var loginError = {};
  return{
    createUser : function(input, callback){
      console.log('factory trying to create the user', input);
      $http.post('/users', input).then(function(response){
        console.log(response);
        if(response.data.err){
          console.log('error!');
          loginError.message = response.data.err;
          console.log(error);
          callback(response.data);
        }
      })
    },
    loginUser: function(input, callback){
      user = {};
      error = {};
      console.log('factory trying to log in with', input);
      $http.post('/login', input).then(function(response){
        console.log(response);
        if(response.data.err){
          console.log('error!');
          error.message = response.data.err;
          console.log(error);
          callback(response.data);
        } else {
          user = response.data.data;
          callback(response.data.data);
        }
      })
    },
    getUser: function(callback){
      callback(user);
    },
    logoutUser: function(){
      user = {};
      $http.post('/logout').then(function(response){
        console.log(response);
      })
    },
    getCurrentUser: function(callback){
      console.log(user, 'in user controller')
    },
    checkLogin: function(callback){
      $http.get('/loggedin').then(function(response){
        console.log(response);
        if(response.data){
          console.log('there is a user');
          user = response.data;
          console.log(user);
          callback(response);
        } else {
          console.log('no user!');
          callback(response);
        }
      })
    },

    getAllUsers: function (callback){
      $http.get('/getAllUsers').success(function(output){
        console.log(output, 'output in user factory');
        callback(output);
      })
    },

    addFriend: function(friend, user, callback){
      console.log(user, 'current user in user')
      console.log('factory trying to add friend to the user', friend);
      $http.post('/addFriend', friend).then(function(response){
        console.log(response);
        callback(response);
      })
    },

    removeFriend: function(friendId, userId, friendIndex, callback){
      console.log(friendId, 'friend id in factory');
      console.log(userId, 'user id in factory');
      console.log(friendIndex, 'current index friend object');
      var user_friendId = {
        friend_id: friendId,
        user_id: userId,
        friend_index: friendIndex
      };
      $http.post('/removeFriend', user_friendId).then(callback);
    }
  }
})
