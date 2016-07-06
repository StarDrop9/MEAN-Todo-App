todoApp.controller('TodoCtrl', function($rootScope, $scope, todosFactory) {

  $scope.todos = [];
  $scope.isEditable = [];

  // get all Todos on Load would like to add label and priority focus for loads
  todosFactory.getTodos().then(function(data) {
    $scope.todos = data.data;
  });

  // Save a Todo to the server
  $scope.save = function($event) {
    if ($event.which == 13 && $scope.todoInput) {
      todosFactory.saveTodo({
        "todo": $scope.todoInput,
        "isCompleted": false,
        "label": null
      }).then(function(data) {
        $scope.todos.push(data.data);
      });
      $scope.todoInput = '';
            }
  };

 

 //update the Label of the Todo
  $scope.updateLabel = function($event, _id, i) {
    var lbl = $event.target.singleSelect;
    var _t = $scope.todos[i];
    todosFactory.updateTodoLabel({
      _id: _id,
      singleSelect: null,
      todo: _t.todo
    }).then(function(data) {
      if (data.data.updatedExisting) {
        _t.singleSelect = lbl;
      } else {
        alert('Oops something went wrong!');
      }
    });
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


$scope.image = "/pics/JackiesLionSm.png";

$scope.templates =
      [ { name: 'template1.html', url: '/partials/homep.html'},
        { name: 'template2.html', url: '/partials/todo.html'} ];
    $scope.template = $scope.templates[0];

});

 

 todoApp.controller('LabelController', function ($scope) {
        $scope.course = "Angular";
        $scope.courses = [{ course: "Angular" }, { course: "JQuery" }, { course: "Bootstrap" }];
        $scope.ngChangeCount = function () {
            $scope.count = $scope.count + 1;
        }
    });