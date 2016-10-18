var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var router = require('./router');
// var dotenv = require('dotenv');

// if (!process.env.NODE_ENV || process.env.NODE_ENV !== 'production') {
//   require('dotenv').load();
// }

app.set('port',process.env.PORT || 8888);

app.use(express.static('./client'));
app.use(bodyParser.json());

// ==================
// ROUTER

// // CORS
// app.use((req, res, next) => {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//   res.header('Access-Control-Allow-Headers',
//     'Content-Type, X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name');
//   next();
// });

router(app, require('./controllers/public/controllers')).init();



// ==================
// ROUTER ENDS




// ==================
// WildCard Route
// ==================

app.get('*',function(req, res){
  res.sendFile('index.html', {'root':'client'})
});

app.listen(app.get('port'), function(){
  console.log('Express server listening on ' , app.get('port'));
});
