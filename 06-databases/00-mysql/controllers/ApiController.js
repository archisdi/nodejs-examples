var database = require('../libs/db');
var DB = new database('members');

module.exports = (app) => {
  app.get('/api/person',(req, res) => {
      DB.all((data) => {
        res.json({data:data});
      });
  });

  app.get('/api/person/:id',(req, res) => {
    DB.find(req.params.id, (data) => {
      res.json({data:data});
    });
  });

  app.post('/api/person/:id',(req, res) => {
      // Update a person data
  });

  app.delete('/api/person/:id',(req, res) => {
      // Delete a person data
  });

  app.post('/api/person',(req, res) => {
      console.log(req.body);
      res.json(req.body);
  });
}
