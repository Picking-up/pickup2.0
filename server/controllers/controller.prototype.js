var express = require('express');

module.exports = (function() {
  return {
    create: function(attributes) {
      return {
        path: attributes.path || '',
        router: express.Router()
      };
    } 
  }; 
})();