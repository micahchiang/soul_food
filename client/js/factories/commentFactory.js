
soulFood.factory('commentFactory', function($http)
{
	var factory = {};

	factory.getCommentsByPostId = function (id, callback)
	{
		console.log(id);
		$http.get('/getCommentsByPostId/' + id).success(function(output){ callback(output); });
	}

	factory.addComment = function(data, callback)
	{
		$http.post('/addComment', data).success(function(output){ callback(output); });
	}

	return factory;
});
