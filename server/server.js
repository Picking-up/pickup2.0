var express = require('express');
var app = express();
var bodyParser = require('body-parser');
// var dotenv = require('dotenv');

// if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
//   require('dotenv').load();
// }

app.set('port',process.env.PORT || 8888);

app.use(express.static('./client'));
app.use(bodyParser.json());

// ==================
// TESTING ROUTES

// app.set("env", process.env.NODE_ENV || "development");

var Users = require('./models/Users');

app.get('/api/users', function(req, res) {
  Users.findAll()
  .then(function(users) {
    res.json(users.models)
  })
  .catch(function(error) {
    res.status(500).json(error);
  })
})

app.post('/api/users', function(req, res) {
  console.log("REQDOTBODY", req.body)
  Users.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
  .then(function() {
    res.json('users post success')
  })
  .catch(function() {
    res.status(500).json(error);
  })
})

// TESTING ENDS
// ==================


// ==================
// WildCard Route
// ==================

app.get('*',function(req, res){
  res.sendFile('index.html', {'root':'client'})
});

app.listen(app.get('port'), function(){
  console.log('Express server listening on ' , app.get('port'));
});
