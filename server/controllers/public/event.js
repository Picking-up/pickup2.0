var ControllerPrototype = require('../controller.prototype.js');
var Events = require('../../models/Events')


module.exports = (function(){
  var controller = ControllerPrototype.create({
    path:'/api/events'
  })

  var router = controller.router;
  var searchRadius = 5;

    router.get('/', function(req, res) {
      console.log("REQUEST: ", req.query);
      
      var location = JSON.parse(req.query.location)

      console.log("LOCATION: ", location);

      var lngMax = location.lng + searchRadius * 0.0112;
      var lngMin = location.lng - searchRadius * 0.0112;
      var latMax = location.lat + searchRadius * 0.0112;
      var latMin = location.lat - searchRadius * 0.0112;

      console.log("MAXMIN: ", lngMax, lngMin, latMax, latMin);

      Events.findAll()
      .then(function(events) {
        console.log('events',events.models)

        var eventsInRadius = events.models.filter(function(event) {
          return(event.attributes.lat > latMin && event.attributes.lat < latMax && event.attributes.lng > lngMin && event.attributes.lng < lngMax);
        })

        console.log("eventsInRadius: ",eventsInRadius)
        res.json(eventsInRadius)
        console.log('sucess')
      })
      .catch(function(error) {
        res.status(500).json(error);
      })
    })

    // router.get('/:radius')


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
