var mysql = require('mysql');

function Database(table){
  this.table = table;
  this.conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"myfast"
  });
}

Database.prototype.all = function(callback) {
  this.conn.query('select * from ' + this.table + ' where id = 1', function(err, rows) {
      if (err) throw err;
      callback(rows)
  });
}

Database.prototype.find = function(id, callback) {
  this.conn.query('select * from ' + this.table + ' where id = ' + id, function(err, rows) {
      if (err) throw err;
      callback(rows[0])
  });
}

module.exports = Database;
