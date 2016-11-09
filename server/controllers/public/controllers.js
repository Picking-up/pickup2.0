// var event = require('./event');
var user = require('./user');
var event = require('./event');
var signIn = require('./signIn');

module.exports = (() => {
  let controllers = [
    event,
    user,
    signIn
  ];

  let router = {};

  controllers.forEach((controller) => {
    router[controller.path] = controller.router;
  });

  return router;
})();
