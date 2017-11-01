'use strict';
let bodyParser = require('body-parser');
let Todos = require('../models/todoModel');

module.exports = (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.get('/api/todos/:username',(req, res) => {
      Todos.find({ username: req.params.username },(err, rows) => {
          if(err) res.send(err);
          res.json(rows);
      });
  });

  app.get('/api/todo/:id',(req, res) => {
      Todos.findById({ _id:req.params.id },(err, row) => {
          if(err) res.send(err);
          res.json(row);
      });
  });

  app.post('/api/todo',(req, res) => {
      let newTodo = Todos({
        username:"anonymous",
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment,
      });

      newTodo.save((err) => {
        if(err) res.send(err);
          res.send('New data created')
      });
  });

  app.put('/api/todo/:id',(req, res) => {

      let data = {
        username:"anonymous",
        todo: req.body.todo,
        isDone: req.body.isDone,
        hasAttachment: req.body.hasAttachment,
      };

      Todos.findByIdAndUpdate(req.params.id, data, { upsert:false }, (err, row) => {
          if(err) res.send(err);
          res.send('Data updated');
      });
  });

  app.delete('/api/todo/:id',(req, res) => {
      Todos.findByIdAndRemove(req.params.id, (err) => {
          if(err) res.send(err);
          res.send('Data Deleted');
      });
  });
}
