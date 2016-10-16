var dotenv = require('dotenv');

if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

module.exports = {
  client: process.env.DB_CLIENT,
  connection: {
    filename: process.env.DB_CONNECTION
  },
  useNullAsDefault: true,
};