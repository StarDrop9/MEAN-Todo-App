todoApp.controller('TodoCtrl', function($rootScope, $scope, todosFactory) {

  $scope.todos = [];
  $scope.isEditable = [];

  // get all Todos on Load would like to add label and priority focus for loads
  todosFactory.getTodos().then(function(data) {
    $scope.todos = data.data;
  });

  // Save a Todo to the server
  $scope.save = function($event) {
    if ($event.which == 13 && $scope.todoInput && $scope.todo.labelInput) {

      todosFactory.saveTodo({
        "todo": $scope.todoInput,
        "todo.label": $scope.todo.labelInput,
        "isCompleted": false
      }).then(function(data) {
        $scope.todos.push(data.data);
      });
      $scope.todoInput = '';
      $scope.todolabel.Input = '';
    }
  };

  //update the status of the Todo
  $scope.updateStatus = function($event, _id, i) {
    var cbk = $event.target.checked;
    var _t = $scope.todos[i];
    todosFactory.updateTodo({
      _id: _id,
      isCompleted: cbk,
      todo: _t.todo
    }).then(function(data) {
      if (data.data.updatedExisting) {
        _t.isCompleted = cbk;
      } else {
        alert('Oops something went wrong!');
      }
    });
  };

  // Update the edited Todo
  $scope.edit = function($event, i) {
    if ($event.which == 13 && $event.target.value.trim()) {
      var _t = $scope.todos[i];
      todosFactory.updateTodo({
        _id: _t._id,
        todo: $event.target.value.trim(),
        isCompleted: _t.isCompleted
      }).then(function(data) {
              console.log(data);
        if (data.data.updatedExisting) {
          _t.todo = $event.target.value.trim();
          $scope.isEditable[i] = false;
        } else {
          alert('Oops something went wrong!');
        }
      });
    }
  };

  // Delete a Todo
  $scope.delete = function(i) {
    todosFactory.deleteTodo($scope.todos[i]._id).then(function(data) {
      //alert(i);
      if (data.data) {
        $scope.todos.splice(i, 1);
      }
    });
  };


// Blog a Todo kps 04/06/16
 $scope.blogTodo = function(i) {
   alert(i);
  todosFactory.blogTodo($scope.todos[i]._id).then(function(data) {
      //alert(i);
      if (data.data) {
        $scope.todos[i];
      }
    });
  };

});



 todoApp.controller('homeCtrl', function($scope) {
            $scope.message = "This page will be used to display all the students";
         });