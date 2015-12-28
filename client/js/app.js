var soulFood = angular.module('soulFood', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: '/partials/main.html', controller: 'mainController'
    })
    .when('/main', {
      templateUrl: '/partials/main.html', controller: 'mainController'
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
  })


