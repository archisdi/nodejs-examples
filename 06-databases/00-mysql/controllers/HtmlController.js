var bodyParser = require('body-parser');
var encodedBodyParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

module.exports = (app) => {
  app.get('/person/:id',(req, res) => {
    res.render('person',{
      id:req.params.id ,
      Qstr: req.query.love
    });
  });

  app.post('/person',encodedBodyParser,(req, res) => {
      console.log(req.body);
      res.json(req.body);
  });
}
