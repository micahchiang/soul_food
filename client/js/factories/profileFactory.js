soulFood.factory('profileFactory', function($http)
{
	var factory = {};
	factory.getEventsById = function (id, callback){
		$http.get('/getEventsById/' + id).success(function(output){ callback(output); });
	}
  factory.getUser = function(id, callback){
  	$http.get('/showUser/' + id).success(function(output){ callback(output); });
  }
	return factory;
});
