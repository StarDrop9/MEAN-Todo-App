todoApp = angular.module('todoApp', ['ngRoute','puElasticInput','monospaced.elastic'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/todo.html',
        controller: 'TodoCtrl'

      }).when('/home', {
        templateUrl: '/partials/homep.html',
        controller: 'TodoCtrl'

      }).otherwise({
        redirectTo: '/'
      });
  });
