var jwt = require('jsonwebtoken');
var moment = require('moment');
var config = require('../../config')

module.exports = (function() {
  function generateToken(user) {
    return jwt.sign({ sub: user.id}, config.secret);
  }
  return {
    generateToken: generateToken
  };
})()
