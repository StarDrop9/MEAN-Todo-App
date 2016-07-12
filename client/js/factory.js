todoApp.factory('todosFactory', function($http) {
  var urlBase = '/api/todos';
  var _todoService = {};
  var urlHome = '/home'; 

  _todoService.getTodos = function() {
    return $http.get(urlBase);
  };

  _todoService.saveTodo = function(todo) {
    debugger; // Set the debugger inside 
                // this function
   console.log(todo);
    return $http.post(urlBase, todo);
  };

  _todoService.updateTodo = function(todo) {
    debugger; // Set the debugger inside 
                // this function
    //{"_id":"56fef2921c91130b00ab4391","todo":"Add Login Piece to this application","isCompleted":false,"label":"Splitting Water"}
      todo = angular.toJson(todo)
       console.log(todo);
    return $http.put(urlBase, todo);
  };

   _todoService.updateTodoTest = function(todo) {
    debugger; // Set the debugger inside 
                // this function
    //{"_id":"56fef2921c91130b00ab4391","todo":"Add Login Piece to this application","isCompleted":false,"label":"Splitting Water"}
      todo = angular.toJson(todo)
       console.log(todo);
    return  $http.put('api/todos', $scope.todo
     ).success(function(todo, status, headers, config) {
     // Do something successful
     alert("successful putting")
     }).error(function(data, 
      status, headers, config) {
     // Handle error
     alert("error putting")
     });





    $http.put(urlBase, {"_id":"56fef2921c91130b00ab4391","isCompleted":false,"label":"Splitting Water","todo":"Add Login Piece to this application"});
  };


 _todoService.updateTodoLabel = function(todo) {
   //todo = JSON.stringify(todo);
   todo = angular.toJson(todo)
  // console.log(todo);
    return $http.put(urlBase, todo);
  };


  _todoService.deleteTodo = function(id) {
    return $http.delete(urlBase + '/' + id);
  };

//kps 04/06/16
   _todoService.blogTodo = function(id) {
   // alert(urlHome);
   return $http.get(urlHome)    
  };

  return _todoService;
});
