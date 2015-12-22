var soleMates = angular.module('soleMates', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider
    .when('/', {
      templateUrl: '/partials/main.html'
    })
    .when('/login', {
      templateUrl: '/partials/login.html'
    })
  })
