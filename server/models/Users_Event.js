var bookshelf = require('../config/bookshelf');
var ModelBase = require('bookshelf-modelbase')(bookshelf);

module.exports = (function() {
  return bookshelf.model('Users_Events', ModelBase.extend({
    tableName: 'userevents',
    events: function(){
      return this.belongsTo('Events');
    },
    users: function(){
      return this.belongsTo('Users');
    }
  }))
})();
