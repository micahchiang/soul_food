var soulFood = angular.module('soulFood', ['ngRoute', 'routeStyles'])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: '/partials/main.html', controller: 'mainController', css: 'css/main.css'
    })
    .when('/main', {
      templateUrl: '/partials/main.html', controller: 'mainController', css: 'css/main.css'
    })
    .when('/login', {
      templateUrl: '/partials/login.html', css: 'css/login.css'
    })
    .when('/add', {
      templateUrl: '/partials/add.html', css: 'css/add.css'
    })
    .when('/dashboard', {
      templateUrl: '/partials/TEMPDASHBOARD.html', css: 'css/dash.css'
    })
    .when('/tempdashboard', {
      templateUrl: '/partials/TEMPDASHBOARD.html', css: 'css/dash.css'
    })
    .when('/chatRoom', {
      templateUrl: '/partials/chatRoom.html'
    })
    .when('/user/:id', {
		  templateUrl: '/partials/profile.html'
	   })
    .when('/event/:id', {
  		templateUrl: 'partials/event.html'
  	})
    .otherwise({
      redirectTo:'/'
    });
  })
