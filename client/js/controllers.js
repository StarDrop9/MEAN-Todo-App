todoApp.controller('TodoCtrl', function($rootScope, $scope, todosFactory) {
  $scope.todos = [];
  $scope.isEditable = [];
  $scope.rowLimit =10 ;
  $scope.priority = 0;
  $scope.label = "Label Idea!";
  $scope.labels = [{ label: "Inspiration" },{ label: "Design" },{ label: "Magnetism" },{ label: "Drones" },{ label: "Anti-Hacking" },{ label: "Splitting Water" },{ label: "Antigravity" }, { label: "Flying" }, { label: "Tech Scouting"}, { label: "Free Energy"}, { label: "Coding"},{ label: "Health"}, { label: "Survival Training"}]
  $scope.image = "/pics/JackiesLionSmller.png";

  // get all Todos on Load would like to add label and priority focus for loads
  todosFactory.getTodos().then(function(data) {
    $scope.todos = data.data;
  });

  // Save a Todo to the server
  $scope.save = function($event,label, priority) {
   debugger; // Set the debugger inside 
      console.log(priority);

    if ($event.which == 13 && $scope.todoInput) {
      todosFactory.saveTodoTest({
        "todo": $scope.todoInput,
        "isCompleted": false,
        "label": label,
        "priority" : priority
      }).then(function(data) {
       $scope.todos.push(data.data);
             });
      $scope.todoInput = '';
    // $scope.todo.Label = '';
      }
  };

 //update the Label of the Todo try to work around the factory service with Jquery pput or replace 
 //since the factory appears to be failing at this time start with a new updateLabelTest control

$scope.updateLabelTest = function($event, _id, i, label) {
       //var label = $event.target.id.value.trim()    
       var _t = $scope.todos[i];
    //console.log(_t);

     todosFactory.updateTodoLabel({
      _id: _id,
      todo: _t.todo,
      isCompleted: false,
      label: label,
      priority : priority    
    }).then(function(data) {
      if (data.data.updatedExisting) {
       // _t.label=label;
      } else {
        alert('Oops something went wrong!');
      }
    });
  };


 $scope.updateLabel = function($event, _id, i, label) {
       //var label = $event.target.id.value.trim()    
       var _t = $scope.todos[i];
    //console.log(_t);
     todosFactory.updateTodoLabel({
      _id: _id,
      todo: _t.todo,
      isCompleted: false,
      label: label,
      priority: priority    
    }).then(function(data) {
      if (data.data.updatedExisting) {
       // _t.label=label;
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
  $scope.edit = function($event, i, label) {
   if ($event.which == 13 && $event.target.value.trim()) {
     var _t = $scope.todos[i];
      todosFactory.updateTodoTest({
       "_id": _t._id,
      "todo": $event.target.value.trim(),
       "isCompleted": _t.isCompleted,
       "label": label
      }).then(function(data) {
        console.log(label);
       if (data.data.updatedExisting) {
         _t.todo = $event.target.value.trim();
        _t.label = label;
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
// $scope.blogTodo = function(i) {
//   alert(i);
//  todosFactory.blogTodo($scope.todos[i]._id).then(function(data) {
      //alert(i);
//      if (data.data) {
//        $scope.todos[i];
//      }
//    });
//  };


$scope.clearlabel = function (){
$scope.label = "";
   }

$scope.ngChangeLabel = function (label){
 console.log(label);
  var label = label;
   }

$scope.ngChangeUpdatedLabel = function (label){
  var updatedlabel = label;
  console.log(updatedlabel); 
 }


$scope.priorityFilter = function (todo) {
 debugger; 
    var priority = parseFloat(todo.priority);
    if (!priorityFilter) {
      return false;
    }
     if(priority = priority) {
      return true;
    }
     return false;
  };




$scope.templates =
      [ { name: 'template1.html', url: '/partials/homep.html'},
        { name: 'template2.html', url: '/partials/todo.html'} ];
    $scope.template = $scope.templates[0];

});




todoApp.controller ('homeCtrl', function($scope) {

$scope.message = "Be Brave and confront evil with Valor"
})