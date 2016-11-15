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
    .then(function(user, err){
      console.log('user',err)
      if(user == null){
        return res.status(401).send({ msg: 'Invalid email or password' });
      }
      if(user){user.comparePassword(req.body.password, function(err, isMatch){
        console.log('in here', isMatch);
        if(isMatch == true){
          res.json({
            token:authHelper.generateToken(user),
            user: user.toJSON()
          })
        } else if( isMatch == false ){
          return res.status(401).send({ msg: 'Invalid email or password' });
        }
      })
    }
    })
  })

  return controller;
})()
