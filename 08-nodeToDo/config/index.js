var conf = require('./config');

module.exports = {
  getDatabaseConnection: () => {
    return 'mongodb://localhost:27017/nodetodo';
  }
}
