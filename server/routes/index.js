(function() {

  'use strict';
  var express = require('express');
  var router = express.Router();
  var mongojs = require('mongojs');
  //var db = mongojs('mongodb://admin:admin123@ds063809.mongolab.com:63809/meantodo', ['todos']);
 var db = mongojs('mongodb://Test1:Lance-7531@ds025459.mlab.com:25459/heroku_g7755ftm', ['todos']);
//var db = mongojs('mongodb://heroku_fdk06q24:4me4grt80flpddgfgj8rcpbv61@ds011820.mlab.com:11820/heroku_fdk06q24', ['todos']);

  /* GET home page. */
  router.get('/', function(req, res) {
    res.render('index');
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
      todo: req.body.todo
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
