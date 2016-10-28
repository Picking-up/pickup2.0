var bookshelf = require('../config/bookshelf');
var ModelBase = require('bookshelf-modelbase')(bookshelf);

module.exports = (function() {
  return bookshelf.model('Users', ModelBase.extend({
    tableName: 'users',
    userevents: function(){
      return this.belongsTo('Users_Events');
    },
    userId: function(){
      return this.belongsTo('Events');
    }
  }))
})();
