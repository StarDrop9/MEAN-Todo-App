todoApp = angular.module('todoApp', ['ngRoute','ui.router','ui.bootstrap','puElasticInput','monospaced.elastic'])

  .config(function($stateProvider, $urlRouterProvider) {
   
//Testing this security blocking funtion for access to .states 
 var accessRestrictionHandler = function($q, $rootScope, $state) {
            var deferred = $q.defer();
debugger;
status = $rootScope.status
console.log(status)
            // make sure user is logged in
            asyncCheckForLogin(function(status) {
                if (status != "Logged In") {
                    // You may save target page URL in cookie for use after login successful later
                    // To get the relative target URL, it is equal to ("#" + this.url).  
                    //      The "this" here is the current scope for the parent state structure of the resolve call.
                    $state.go("state1.login");
                }
                else    // if logged in, continue to load the controllers.  Controllers should not start till resolve() is called.
                    deferred.resolve();
            }.bind(this));

            return deferred.promise;
        };


  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/state1");
  //
  // Now set up the states

  $stateProvider
    .state('state1', {
      url: "/state1",
      templateUrl: "partials/state1.html",
      controller: function($rootScope) {
          $rootScope.hidePic= false;
          console.log($rootScope.hidePic)
                    }
    })
    
   .state('state1.register', {
      url: "/register",
      templateUrl: "partials/state1.register.html",
       controller: function($rootScope) {
          $rootScope.hidePic= true;
          console.log($rootScope.hidePic)
                    }

      })

   .state('state1.login', {
      url: "/login",
      templateUrl: "partials/state1.login.html",
       controller: function($rootScope) {
          $rootScope.hidePic= false;
          console.log($rootScope.hidePic)
                    }
          })

    .state('state2', {
      url: "/state2",
      templateUrl: "partials/state2.html"
    })
    
    .state('state2.todo', {
      url: "/todo",
      templateUrl: "partials/todo.html",
      controller: function($scope) {
            },
    
    //added for testing
    // resolve: { loginRequired : accessRestrictionHandler } 

    })
    
.state('state2.todoB', {
      url: "/todoB",
      templateUrl: "partials/todoB.html",
      controller: function($scope) {
            },
    
    //added for testing
    // resolve: { loginRequired : accessRestrictionHandler } 

    })

.state('state2.todoC', {
      url: "/todoC",
      templateUrl: "partials/todoC.html",
      controller: function($scope) {
         
            },
    
    //added for testing
    // resolve: { loginRequired : accessRestrictionHandler } 

    })




    .state('state2.todays', {
      url: "/todays",
      templateUrl: "partials/todays.html",
      controller: function($scope) {
             },
              //added for testing
   //  resolve: { loginRequired : accessRestrictionHandler } 
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
              },
 //added for testing
   //  resolve: { loginRequired : accessRestrictionHandler } 


    })
    
    .state('state2.ad', {
      url: "/ad",
      templateUrl: "partials/addtodo.html",
      controller: function($scope) {
        $scope.myValue= false;
       }
    })
    
    .state('state2.cat', {
      url: "/cat",
      templateUrl: "partials/homeul.html",
      controller: function($scope) {
        
      }
    })
});

