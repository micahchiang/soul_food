soulFood.factory('eventFactory', function($http)
{
	var factory = {};

	factory.addEvent = function(data, callback)
	{
		$http.post('/addEvent', data).success(function(output){ callback(output); });
	}

	factory.getEvents = function(callback)
	{
		$http.get('/getEvents').success(function(output){ callback(output); });
	}
  factory.getEventById = function (id, callback)
  	{
  		$http.get('/getEventById/' + id).success(function(output){ callback(output); });
  	}
	return factory;
});
