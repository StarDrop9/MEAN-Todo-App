todoApp = angular.module('todoApp', ['ngRoute','ui.router','ui.bootstrap','puElasticInput','monospaced.elastic'])

  .config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states
  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "partials/state1.html"
    })
    
   .state('state1.register', {
      url: "/register",
      templateUrl: "partials/state1.register.html",
      controller: function($scope) {
              }
    })

   .state('state1.login', {
      url: "/login",
      templateUrl: "partials/state1.login.html",
      controller: function($scope) {
              }
    })

    .state('state1.list', {
      url: "/list",
      templateUrl: "partials/state1.list.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
    .state('state2', {
      url: "/state2",
      templateUrl: "partials/state2.html"
    })
    .state('state2.list', {
      url: "/list",
      templateUrl: "partials/state2.list.html",
      controller: function($scope) {
        $scope.things = ["A", "Set", "Of", "Things"];
      }
    })
    .state('state2.todo', {
      url: "/todo",
      templateUrl: "partials/todo.html",
      controller: function($scope) {
        
      }
    })
    .state('state2.todays', {
      url: "/todays",
      templateUrl: "partials/todays.html",
      controller: function($scope) {
        
      }
    })
    .state('state2.home', {
      url: "/home",
      templateUrl: "partials/homep.html",
      controller: function($scope) {
        
      }
    })
    .state('state2.prior', {
      url: "/prior",
      templateUrl: "partials/homep.html",
      controller: function($scope) {
        
      }
    })
    .state('state2.ad', {
      url: "/ad",
      templateUrl: "partials/addtodo.html",
      controller: function($scope) {
        
      }
    })
    .state('state2.cat', {
      url: "/cat",
      templateUrl: "partials/homeul.html",
      controller: function($scope) {
        
      }
    });
});

