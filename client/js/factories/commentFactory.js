soulFood.factory('commentFactory', function($http)
{
	var factory = {};
	factory.getCommentsById = function (id, callback)	{
		$http.get('/getCommentsById/'+id).then(callback);
	}
	factory.addComment = function(data, event_id, callback){
		$http.post('/addComment/'+event_id, data).success(function(output){ callback(output); });
	}
	return factory;
});
