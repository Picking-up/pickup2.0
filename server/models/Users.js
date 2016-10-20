var bookshelf = require('../config/bookshelf');
var ModelBase = require('bookshelf-modelbase')(bookshelf);

module.exports = (function() {
  return bookshelf.model('Users', ModelBase.extend({
    tableName: 'users'
  }))
})();