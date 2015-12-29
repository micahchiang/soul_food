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
      templateUrl: '/partials/add.html'
    })
    .when('/dashboard', {
      templateUrl: '/partials/dashboard.html'
    })
    .when('/tempdashboard', {
      templateUrl: '/partials/TEMPDASHBOARD.html'
    })
    .when('/chatRoom', {
      templateUrl: '/partials/chatRoom.html'
    })
    .otherwise({
      redirectTo:'/'
    });
  })
