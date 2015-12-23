soulFood.factory('dashboardFactory', function($http)
{
	var factory = {};


	factory.addEvent = function(data, callback)
	{
    console.log('do i reach here');
		$http.post('/addTopic', data).success(function(output){ callback(output); });
	}

	factory.getEvent = function(callback)
	{
    console.log('do i reach factroy getopics');
		$http.get('/getTopics').success(function(output){ callback(output); });
	}
  factory.getEventById = function (id, callback)
  	{

  		$http.get('/getTopicById/' + id).success(function(output){ callback(output); });
  	}
	return factory;
});
