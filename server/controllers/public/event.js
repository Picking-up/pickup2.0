var ControllerPrototype = require('../controller.prototype.js');
var Events = require('../../models/Events')


module.exports = (function(){
  var controller = ControllerPrototype.create({
    path:'/api/events'
  })

  var router = controller.router;

    router.get('/', function(req, res) {
      Events.findAll()
      .then(function(events) {
        console.log('events',events.models)
        res.json(events.models)
        console.log('sucess')
      })
      .catch(function(error) {
        res.status(500).json(error);
      })
    })

    router.post('/', function(req, res) {
      console.log("REQDOTBODY", req.body)
      Events.create({
        location: req.body.location,
        lng: req.body.lng,
        lat: req.body.lat,
        sports: req.body.sports,
        players: req.body.player
      })
      .then(function() {
        res.json('event post success')
      })
      .catch(function() {
        res.status(500).json(error);
      })
    })

    return controller;

})();
