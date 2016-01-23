var soulFood = angular.module('soulFood', ['ngRoute', 'routeStyles', 'ui.bootstrap'])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: '/partials/main.html', css: '/css/main.css'
    })
    .when('/login', {
      templateUrl: '/partials/login.html'
    })
    .when('/add', {
      templateUrl: '/partials/add.html'
    })
    .when('/dashboard', {
      templateUrl: '/partials/dashboard.html'
    })
    .when('/chatRoom', {
      templateUrl: '/partials/chatRoom.html'
    })
    .when('/user/:id', {
		  templateUrl: '/partials/profile.html'
	   })
     .when('/restaurant/:id', {
 		  templateUrl: '/partials/restaurant.html'
 	   })
    .when('/event/:id', {
  		templateUrl: 'partials/event.html'
  	})
    .when('/events', {
      templateUrl: '/partials/events.html', controller: 'showAllEventsController'
    })
    .when('/addrestaurants', {
      templateUrl: '/partials/add_restaurants.html'
    })
    .when('/restaurants', {
      templateUrl: '/partials/restaurants.html'
    })
    .otherwise({
      redirectTo:'/'
    });
  })
