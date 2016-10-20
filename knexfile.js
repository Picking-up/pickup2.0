// var dotenv = require('dotenv');

// if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
//   require('dotenv').load();
// }

module.exports = {
  client: 'sqlite3',
  connection: {
    filename: 'pickup2.sqlite'
  },
  useNullAsDefault: true,
};