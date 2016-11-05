var ControllerPrototype = require('../controller.prototype.js');
var Users = require('../../models/Users');

module.exports = (function() {
  var controller = ControllerPrototype.create({
    path: '/api/users'
  });

  var router = controller.router;

  router.get('/', function(req, res) {
    Users.findAll()
    .then(function(users) {
      res.json(users.models)
    })
    .catch(function(error) {
      res.status(500).json(error);
    })
  })

  router.post('/', function(req, res) {
    new Users({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    .save()
    .then(function(){
      res.json('users post success')
    })
    .catch(function() {
      res.status(500).json(error);
    })
  })

  return controller;
})();
