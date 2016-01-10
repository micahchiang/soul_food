var soulFood = angular.module('soulFood', ['ngRoute', 'routeStyles'])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: '/partials/main.html', controller: 'mainController', css: 'css/main.css'
    })
    .when('/login', {
      templateUrl: '/partials/login.html', css: 'css/login.css'
    })
    .when('/add', {
      templateUrl: '/partials/add.html', css: 'css/add.css'
    })
    .when('/dashboard', {
      templateUrl: '/partials/dashboard.html', css: 'css/dash.css'
    })
    .when('/chatRoom', {
      templateUrl: '/partials/chatRoom.html', css: 'css/chat.css'
    })
    .when('/user/:id', {
		  templateUrl: '/partials/profile.html', css: 'css/profile.css'
	   })
     .when('/restaurant/:id', {
 		  templateUrl: '/partials/restaurant.html'
 	   })
    .when('/event/:id', {
  		templateUrl: 'partials/event.html', css: 'css/event.css'
  	})
    .when('/events', {
      templateUrl: '/partials/events.html', controller: 'showAllEventsController', css: 'css/events.css'
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
