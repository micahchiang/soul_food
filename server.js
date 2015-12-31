// Require the Express Module
var express = require("express"),
//middleware
    path = require("path"),
    mongoose = require('mongoose'),
    app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');

//socket io
// var http = require('http').Server(app);


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

var io = require('socket.io')(server);

var history = [];

io.sockets.on('connection', function (socket) {
  console.log("A user has been connected");
  console.log(socket.id);

  socket.on('message', function(data){
    console.log('in server passing message' +  ' ' + data);
    var message = data.user +' says: ' + data.message;
    io.emit('serverMsg', {message: message});
    io.emit('chatHistory', {history: history})
    history.push(message);
  })
  //all the socket code goes in here!
})
console.log('history messages' + ' ' + history);
// io.on('connection', function(socket){
// 	console.log('user has been connected');
// })
