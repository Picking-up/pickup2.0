var ControllerPrototype = require('../controller.prototype');
var Users = require('../../models/Users');
var authHelper = require('../../helper/authHelper');

module.exports = (function() {
  var controller = ControllerPrototype.create ({
    path: '/api/signIn'
  });

  var router = controller.router;

  router.post('/', function(req, res) {
    new Users({ name: req.body.username})
    .fetch()
    .then(function(user){
      if(!user){
        res.send('Could not find user')
      }
      user.comparePassword(req.body.password, function(err, isMatch){
        if(isMatch){
          res.json({
            token:authHelper.generateToken(user),
            user: user.toJSON()
          })
        } else if(!isMatch){console.log('wrong yo')}
      })
    })
  })

  return controller;
})()
