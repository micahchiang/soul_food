var users = require('../controllers/users');
var events = require('./../controllers/events.js');
var comments = require('./../controllers/comments.js');
var restaurants = require('./../controllers/restaurants.js')
var passport = require('passport');
module.exports = function(app) {
  app.post('/users', users.createUser);
  //dashboard.html routes
  app.post('/addEvent', events.addEvent);
  app.get('/getEvents', events.getEvents);
  //event.html routes
  app.get('/getEventById/:id', events.getEventById);
  app.get('/getEventsById/:id', events.getEventsById);
  //delete
	app.delete('/destroyEvent/:id', events.destroyEvent);
  //comments.html routes
  app.get('/getCommentsById/:id', comments.getCommentsById);
  app.post('/addComment/:id', comments.addComment);
  //user.html routes
  app.get('/showUser/:id', users.showUser);
  app.get('/getAllUsers', users.getAllUsers);
  app.post('/addFriend', users.addFriend);
  app.post('/removeFriend', users.removeFriend);
  app.post('/attendEvent/:id', events.attendEvent);
  //restaurant routes
  app.post('/addRestaurant', restaurants.addRestaurant);
  app.post('/searchRestaurants', restaurants.searchRestaurants);
  // app.get('/getRestaurant/:id', restaurants.getRestaurant);
  // app.get('/getAllRestaurants', restaurants.getAllRestaurants);
  app.post('/removeRestaurant/:id', restaurants.removeRestaurant);
  //OAUTH routes
  app.get("/auth/facebook", passport.authenticate("facebook",{scope: ['email']}));
  app.get("/auth/facebook/callback",
    passport.authenticate("facebook",
      { failureRedirect: "/", successRedirect:"/" }));
  app.get("/auth/google",
        passport.authenticate("google",
          { scope: ["https://www.googleapis.com/auth/plus.login",
                    'https://www.googleapis.com/auth/userinfo.email']
  }));
  app.get("/auth/google/callback",
    passport.authenticate("google",
      { failureRedirect: "/", successRedirect:"/" }));
  //local auth route
  app.post('/login', function(req, res, next){
    passport.authenticate('local', function(err, user, info){
      if(err){return next(err);}
      if(!user) {
        console.log('incorrect user pass combo!');
        return res.json({err: 'Invalid username and/or password combination!'});
      }
      req.logIn(user, function(err){
        if(err){ return next(err);}
        console.log('success');
        console.log(req.isAuthenticated());
        console.log(req.user);
        console.log('req session:', req.session);
        return res.json({data:user});
      });
    })(req,res,next);
  });

  app.post('/logout', function(req,res){
    console.log('logging out ', req.session.passport.user);
    req.logOut();
    console.log('are they still logged in?', req.isAuthenticated());
    res.send(200);
  })

  //route to test if the user is logged in or not
  app.get('/loggedin', function(req, res){
    console.log('loggedin?', req.isAuthenticated());
    return res.json(req.isAuthenticated() ? req.user : null);
  });
};
