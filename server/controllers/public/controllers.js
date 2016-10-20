// var event = require('./event');
var user = require('./user');
var event = require('./event');

module.exports = (() => {
  let controllers = [
    event,
    user
  ];

  let router = {};

  controllers.forEach((controller) => {
    router[controller.path] = controller.router;
  });

  return router;
})();
