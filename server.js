// Require the Express Module
var express = require("express"),
    path = require("path"),
    mongoose = require('mongoose'),
    bodyParser = require("body-parser"),
    app = express();
// instantiate the app
app.use(bodyParser.json());
require('./server/config/mongoose.js');
// this line requires and runs the code from our routes.js file and passes it app so that we can attach our routing rules to our express application!
require('./server/config/routes.js')(app);
// set up a static file server that points to the "client" directory
app.use(express.static(path.join(__dirname, './client')));
app.listen(8000, function() {
  console.log('soul food on: 8000');
});
