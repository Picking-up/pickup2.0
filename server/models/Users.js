var bcrypt = require('bcrypt-nodejs');
var crypto = require('crypto');
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
    },

    initialize: function() {
      this.on('saving', this.hashPassword, this);
    },

    hashPassword: function(model, attrs, options){
      var password = model.get('password');
      if(!password){ return; }
      return new Promise(function(resolve, reject){
        bcrypt.genSalt(10, function(err, salt) {
          bcrypt.hash(password, salt, null, function(err, hash) {
            if(err){ return err; }
            model.set('password',hash);
            resolve();
          })
        })
      })
    }
  }))
})();
