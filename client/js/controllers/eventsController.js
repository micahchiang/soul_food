soulFood.controller('eventsController', function($scope,$location, $routeParams,eventFactory, userFactory, commentFactory) {
  $scope.user = {};
  userFactory.getUser(function(data){
    console.log(data);
    $scope.user = data;
  })
  $scope.events = [];
    var id = $routeParams.id;

    var getEvent = function(id){
  		eventFactory.getEventById(id, function(data){
  			$scope.events= data;
        console.log($scope.events);
  		});
    }
    getEvent(id);
    var getCommentListById = function(id){
      console.log(id);
    		commentFactory.getCommentsById(id,function(response){
          console.log('do i get here');
    			$scope.comments = response.data.comments;
          console.log($scope.comments);
        })
    }
  getCommentListById(id);

  $scope.addComment= function(comment, event_id){
    console.log($scope.user);
    console.log(event_id);
		comment.user = $scope.user;
		commentFactory.addComment(comment, event_id, function(){
			getCommentListById(id);
		})
    $scope.newComment = {};
	}
})
