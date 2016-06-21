todoApp = angular.module('todoApp', ['ngRoute','puElasticInput'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/todo.html',
        controller: 'TodoCtrl'
      }).otherwise({
        redirectTo: '/'
      });
  });
