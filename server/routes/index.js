(function() {

  'use strict';
  var express = require('express');
  var router = express.Router();
  var mongojs = require('mongojs');
  //var db = mongojs('mongodb://admin:admin123@ds063809.mongolab.com:63809/meantodo', ['todos']);
 var db = mongojs('mongodb://Test1:Lance-7531@ds025459.mlab.com:25459/heroku_g7755ftm', ['todos']);
//var db = mongojs('mongodb://heroku_fdk06q24:4me4grt80flpddgfgj8rcpbv61@ds011820.mlab.com:11820/heroku_fdk06q24', ['todos']);

router.get('/', function(req, res) {
      res.render('homepage');
  });

router.get('/testa', function(req, res) {
      res.render('testanimate');
  });

router.get('/test2', function(req, res) {
      res.render('test2');
  });

  router.get('/login', function(req, res) {
      res.render('login');
  });

 
 router.get('/register', function(req, res) {
    res.render('register');
  });
  /* GET ToDo page. */
  router.get('/index', function(req, res) {
    res.render('index');
  });

/* GET Home page. */

router.get('/home', function(req, res) {
    res.render('home');
  });

router.get('/UIRouter', function(req, res) {
    res.render('UIRouter');
  });

router.get('/ad', function(req, res) {
    res.render('addtodo');
  });
 

router.get('/adder', function(req, res) {
    res.render('clickadd');
  });


router.get('/drag', function(req, res) {
    res.render('dragndrop');
  });

router.get('/modal', function(req, res) {
    res.render('modal');
  });

router.get('/archive', function(req, res) {
    res.render('archive');
  });

router.get('/navtest', function(req, res) {
    res.render('NavTest');
  });

router.get('/search', function(req, res) {
    res.render('search');
  });
router.get('/today', function(req, res) {
    res.render('today');
  });

router.get('/add', function(req, res) {
    res.render('add');
  });

router.get('/iframe', function(req, res) {
    res.render('iframetest');
  });  

router.get('/pics', function(req, res) {
    res.render('Upload');
  }); 


  router.get('/api/todos', function(req, res) {
    db.todos.find(function(err, data) {
      res.json(data);
    });
  });

  router.post('/api/todos', function(req, res) {
    db.todos.insert(req.body, function(err, data) {
      res.json(data);
    });

  });

  router.put('/api/todos', function(req, res) {

    db.todos.update({
      _id: mongojs.ObjectId(req.body._id)
    }, {
      isCompleted: req.body.isCompleted,
      todo: req.body.todo,
      label: req.body.label,
      priority : req.body.priority
    }, {}, function(err, data) {
      res.json(data);
    });

  });

  router.delete('/api/todos/:_id', function(req, res) {
    db.todos.remove({
      _id: mongojs.ObjectId(req.params._id)
    }, '', function(err, data) {
      res.json(data);
    });

  });


  module.exports = router;

}());
