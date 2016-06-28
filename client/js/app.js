todoApp = angular.module('todoApp', ['ngRoute','puElasticInput','monospaced.elastic','label-selection'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/todo.html',
        controller: 'TodoCtrl'
        })
       .when("/home", { 
        templateUrl: "/partials/homep.html", 
        controller: "homeCtrl"
        }) 
       .otherwise({
        redirectTo: '/'
        });
  });

var label = angular.module('label-selection',[]);