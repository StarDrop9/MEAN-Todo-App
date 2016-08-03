todoApp.factory('todosFactory', function($http) {
  var urlBase = '/api/todos';
  var _todoService = {};
  var urlHome = '/home'; 

//var val1 = 'Magnetism'

  _todoService.getTodos = function() {
  //debugger; // Set the debugger inside 
                // this function
    return $http.get(urlBase);
//      return $http.get(urlBase, {params:{"label": "Magnetism"}})
  //  .then(function (response) { /* */    });


 };
  _todoService.saveTodo = function(todo) {
    //debugger; // Set the debugger inside 
                // this function
   console.log(todo);
    return $http.post(urlBase, todo);
  };

  
  _todoService.saveTodoTest = function(todo) {
    //debugger; // Set the debugger inside 
                // this function
   console.log(todo);
    return $http.post(urlBase,todo)
    .success(function(todo, status, headers, config) {
     // Do something successful
     //alert("successful putting")
     }).error(function(data, 
      status, headers, config) {
     // Handle error
     //alert("error putting")
     });
  };

  _todoService.updateTodoTest = function(todo) {
    debugger; // Set the debugger inside 
                // this function
    //var todo = $httpParamSerializer({"_id":"56fef2921c91130b00ab4391","todo":"Add Login Piece to this application","isCompleted":false,"label":"Splitting Water"})
      //todo = angular.toJson(todo)
       console.log(todo.label);
    return $http.put(urlBase,todo, 
    {headers: { 'Content-Type': 'application/json' } });
  
    };

   _todoService.updateTodo = function(todo) {
    //debugger; // Set the debugger inside 
                // this function
    //{"_id":"56fef2921c91130b00ab4391","todo":"Add Login Piece to this application","isCompleted":false,"label":"Splitting Water"}
     // todo = angular.toJson(todo)
    //  console.log(todo);
    return $http.put(urlBase,todo)
    .success(function(todo, status, headers, config) {
     // Do something successful
     //alert("successful putting")
     }).error(function(data, 
      status, headers, config) {
     // Handle error
     //alert("error putting")
     });
 
  };


 _todoService.updateTodoLabel = function(todo) {
  //debugger; // Set the debugger inside 
                // this function
   //todo = JSON.stringify(todo);
   todo = angular.toJson(todo)
   console.log(todo.label);
    return $http.put(urlBase, todo, {headers: { 'Content-Type': 'application/json' } });
  };


  _todoService.deleteTodo = function(id) {

  //debugger; 
  //alert (id);
    return $http.delete(urlBase + '/' + id);
  };

//kps 04/06/16
//   _todoService.blogTodo = function(id) {
   // alert(urlHome);
 //  return $http.get(urlHome)    
 // };

  return _todoService;
});
