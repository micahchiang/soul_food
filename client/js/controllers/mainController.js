soulFood.controller('mainController', function($scope, $location, $anchorScroll){
	$scope.scrollTo = function(id){
		$location.hash(id);
		$anchorScroll();
		$location.hash(old);
	}
});
