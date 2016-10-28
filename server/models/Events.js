var bookshelf = require('../config/bookshelf');
var ModelBase = require('bookshelf-modelbase')(bookshelf);

module.exports = (function() {
  return bookshelf.model('Events', ModelBase.extend({
    tableName: 'events',
    userevents: function(){
      return this.belongsTo('Users_Events')
    },
    users: function(){
      return this.belongsTo('users')
    }
  }))
})();
