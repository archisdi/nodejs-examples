var database = require('../libs/db');
var DB = new database('person');

var schema = {
  firstname: String,
  lastname: String,
  address: String
};

module.exports = (app) => {
  app.get('/api/person',(req, res) => {
      // DB.all((data) => {
      //   res.json({data:data});
      // });
  });

  app.get('/api/person/:id',(req, res) => {
    // DB.find(req.params.id, (data) => {
    //   res.json({data:data});
    // });
  });

  app.post('/api/person/:id',(req, res) => {
      // Update a person data
  });

  app.delete('/api/person/:id',(req, res) => {
      // Delete a person data
  });

  app.post('/api/person',(req, res) => {
      DB.initSchema(schema);
      DB.createObject('edwina','anky','bandung');
      res.send('okay');
  });
}
