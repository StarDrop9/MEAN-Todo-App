todoApp.factory('todosFactory', function($http) {
  var urlBase = '/api/todos';
  var _todoService = {};
  var urlHome = '/home' 

  _todoService.getTodos = function() {
    return $http.get(urlBase);
  };

  _todoService.saveTodo = function(todo) {
    return $http.post(urlBase, todo);
  };

  _todoService.updateTodo = function(todo) {
    return $http.put(urlBase, todo);
  };

  _todoService.deleteTodo = function(id) {
    return $http.delete(urlBase + '/' + id);
  };

//kps 04/06/16
   _todoService.blogTodo = function(id) {
   // alert(urlBase+ '/' + id);
   return $http.get(urlHome);
    
  };

  return _todoService;
});
