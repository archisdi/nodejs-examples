var mongoose = require('mongoose');

function Database(table){
  this.table = table;
  this.conn = mongoose.connect('mongodb://localhost:27017/udemy');
}

Database.prototype.initSchema = function(scheme) {
  this.schema = mongoose.Schema(scheme);
  this.createModel();
}

Database.prototype.createModel = function() {
  this.model = mongoose.model(this.table, this.schema);
}

Database.prototype.createObject = function(fn,ln,ad) {
  let data = this.model({
    firstname:fn,
    lastname:ln,
    address:ad
  });

  data.save();
}

// Database.prototype.all = function(callback) {
//   this.conn.query('select * from ' + this.table + ' where id = 1', function(err, rows) {
//       if (err) throw err;
//       callback(rows)
//   });
// }
//
// Database.prototype.find = function(id, callback) {
//   this.conn.query('select * from ' + this.table + ' where id = ' + id, function(err, rows) {
//       if (err) throw err;
//       callback(rows[0])
//   });
// }

module.exports = Database;
