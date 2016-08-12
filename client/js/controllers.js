todoApp.controller('TodoCtrl', function($rootScope, $scope, todosFactory,$timeout) {
  $scope.todos = [];
  $scope.isEditable = [];
  $scope.rowLimit = 3 ;
  $scope.priorities= [{priority:"Today" },{priority:"Action" },{priority:"High"},{priority:"Medium"},{priority:"Low"},{priority:"Completed"}];
  $scope.label = "Category";
  $scope.labels = [{ label: "Inspiration" },{ label: "Design" },{ label: "Personal" },{ label: "Magnetism" },{ label: "Drones" },{ label: "Anti-Hacking" },{ label: "Splitting Water" },{ label: "Antigravity" }, { label: "Flying" }, { label: "Tech Scouting"}, { label: "Free Energy"}, { label: "Coding"},{ label: "Health"}, { label: "Survival Training"}]
  $scope.image = "/pics/JackiesLionSmllerTapper.png";

 $scope.imagePath='url("https://meantodo1.herokuapp.com/pics/NatureImg2.png")'; 


     $scope.added = function(){
       debugger
        $scope.appState ="added";
        $timeout(function () {
       var appState = $scope.appState = "removed";
        console.log(appState);
    }, 2000);
         
        }

  // get all Todos on Load would like to add label and priority focus for loads
  todosFactory.getTodos().then(function(data) {
    $scope.todos = data.data;
   // $scope.data = data.data;
  });

  // Save a Todo to the server kps tried 07/27PM || $scope.addInput 
  $scope.save = function($event,label, priority) {
   debugger; // Set the debugger inside 
      console.log(priority);

    if ( $event.which == 13 && $scope.todoInput ) {
      todosFactory.saveTodo({
        "todo": $scope.todoInput,
        "isCompleted": false,
        "label": label,
        "priority" : priority
      }).then(function(data) {
       $scope.todos.push(data.data);
             });
      $scope.todoInput = '';
    // $scope.todo.Label = '';
    $scope.added();
         

      }
  };


$scope.add = function($event,label, priority) {
   debugger; // Set the debugger inside 
      console.log(priority);

    if ( $event.which == 1 && $scope.todoInput ) {
      todosFactory.saveTodo({
        "todo": $scope.todoInput,
        "isCompleted": false,
        "label": label,
        "priority" : priority
      }).then(function(data) {
       $scope.todos.push(data.data);
             });
      $scope.todoInput = '';
    // $scope.todo.Label = '';
    $scope.added();
    
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

    
      
    // $scope.totalDisplayed = 0;          
    
     $scope.loadMore = function ($scope.totalDisplayed) {
      $scope.totalDisplayed += 1;
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
  $scope.edit = function($event, i, label,priority) {
   if ($event.which == 13 && $event.target.value.trim()) {
     var _t = $scope.todos[i];
      todosFactory.updateTodoTest({
       "_id": _t._id,
      "todo": $event.target.value.trim(),
       "isCompleted": _t.isCompleted,
       "label": label,
       "priority":priority
      }).then(function(data) {
        console.log(label);
       if (data.data.updatedExisting) {
         _t.todo = $event.target.value.trim();
        _t.label = label;
        _t.priority = priority;
          $scope.isEditable[i] = false;
        } else {
          alert('Oops something went wrong!');
        }
      });
    }
  };

  // Delete a Todo

  $scope.delete = function(i) {
  //debugger;
    todosFactory.deleteTodo($scope.todos[i]._id).then(function(data) {
     // alert(data);
      if (data.data) {
        $scope.todos.splice(i, 1);
      }
    });
  };





 $scope.ChooseLabelString = function(label) {
      $scope.filters = label;
    };


$scope.isActive = function(todo) {
        return todo.isCompleted === false;
    };
    

$scope.isComplete = function(todo) {
        return todo.isCompleted === true;
    };

 $scope.isInteresting = function (todo) {
//        debugger;
        if ($scope.AAA == undefined) {
  //       console.log($scope.AAA); 
            return true;
        }
    //    console.log($scope.AAA);
        return todo.todo.indexOf($scope.AAA) !== -1;
    };

 $scope.isLabel = function (todo) {
        debugger;
        if ($scope.BBB == undefined) {
         console.log($scope.BBB); 
            return true;
        }
        console.log($scope.BBB);
        return todo.label.indexOf($scope.BBB) !== -1;
    };

 $scope.isPriority = function (todo) {
//        debugger;
        if ($scope.CCC == undefined) {
  //       console.log($scope.BBB); 
            return true;
        }
    //    console.log($scope.AAA);
        return todo.priority.indexOf($scope.CCC) !== -1;
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


$scope.clearpriority = function (){
$scope.priority = "";
   }



$scope.ngChangeLabel = function (label){
 console.log(label);
  var label = label;
   }

$scope.ngChangeUpdatedLabel = function (label){
  var updatedlabel = label;
  console.log(updatedlabel); 
 }


//$scope.priorityFilter = function (todos) {
 //    for (var i = todos.length - 1; i >= 0; i--) {
   //  var todo = todos[i]
     // debugger; 
   //   var priority = parseFloat(todo.priority);
   // if (!priorityFilter) {
   //   return false;
   // }
   //  if(priority = priority) {
   //   return true;
  //  }
 //    return false;
//  };
//  };



$scope.templates =
      [ { name: 'template1.html', url: '/partials/homep.html'},
        { name: 'template2.html', url: '/partials/todo.html'} ];
    $scope.template = $scope.templates[0];
});


todoApp.controller ('homeCtrl', function($scope) {
$scope.message = "Be Brave and confront evil with Valor"
}) ;



