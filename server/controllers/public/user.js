var ControllerPrototype = require('../controller.prototype.js');
var Users = require('../../models/Users');
var authHelper = require('../../helper/authHelper');


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
    .then(function(user){
      console.log(user,'this is the user log')
      res.json({
      token:authHelper.generateToken(user),
      user: user.toJSON()
    })
    })
    .catch(function() {
      res.status(500).json(error);
    })
  })

  return controller;
})();
