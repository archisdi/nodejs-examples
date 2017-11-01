'use strict';

let Todos = require('../models/todoModel');

module.exports = (app) => {
    app.get('/api/setuptodos',(req, res) => {
      let data = [
        {username:"archie", todo:"go to bandung", isDone:false, hasAttachment:false},
        {username:"archie", todo:"makan", isDone:false, hasAttachment:false},
        {username:"archie", todo:"learn node", isDone:true, hasAttachment:false},
        {username:"edwina", todo:"minum", isDone:false, hasAttachment:false},
        {username:"edwina", todo:"kuliah", isDone:true, hasAttachment:false},
        {username:"angga", todo:"go to makassar", isDone:false, hasAttachment:false}
      ];

      Todos.create(data, (err, result) => {
          res.send(result);
      });

    });
}
