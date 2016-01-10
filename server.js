// Require the Express Module
var express = require("express"),
//middleware
    path = require("path"),
    mongoose = require('mongoose'),
    app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

//passport and strategies
var passport = require('passport');
var passportLocal = require('passport-local');
// middleware configuration
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressSession({ secret: process.env.SESSION_SECRET || 'solegood',
                          resave: false,
                          saveUninitialized: false}));
//passport configuration
app.use(passport.initialize());
app.use(passport.session());
require('./server/config/mongoose.js');

require('./server/config/passport.js');
// require('./server/config/yelp.js');
// authentication
require("./server/auth/fb_auth.js");
require("./server/auth/google_auth.js")

//routes
require('./server/config/routes.js')(app);

// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, './client')));

var server = app.listen(8000, function() {
  console.log('soul food on: 8000');
});
////socket io
var io = require('socket.io')(server);
var history = [];
var currentUsers;

io.sockets.on('connection', function (socket) {
  console.log("A user has been connected with socket id: " + socket.id);

  socket.on('message', function(data){
    currentUsers = data.user;
    console.log('in server passing message' +  ' ' + data.message);
    var message = data.user +' says: ' + data.message;
    io.emit('serverMsg', {message: message});
    history.push(message);
  });

  socket.on('history', function(input){
    currentUsers = input.name;
    var message = input.name + " has entered the chat";
    history.push(message);
    io.emit('chatHistory', {history: history});
  })

  socket.on('logout', function(){
    console.log('logging out');
  })

  // socket.on("disconnect", function(data){
  //   var message = currentUsers[socket.id] + " has left the chat";
  //   history.push(message);
  //   io.emit('serverMsg', {msg: message})
  //   delete currentUsers[socket.id];
  // });
});
