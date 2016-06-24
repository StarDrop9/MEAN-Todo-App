todoApp = angular.module('todoApp', ['ngRoute','puElasticInput','monospaced.elastic','label-selection'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/partials/todo.html',
        controller: 'TodoCtrl'

      }).when('/home', {
        templateUrl: '/partials/homep.html',
        controller: 'homeCtrl'

      }).otherwise({
        redirectTo: '/home'
      });
  });

  var label = angular.module('label-selection',[]);
  label.controller('label-controller', function($scope){
    $scope.labels = ["Magnetism", "Electricity", "Coding", "AngularJS"];
    });
