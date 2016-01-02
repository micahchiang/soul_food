var mongoose = require('mongoose');

var User = mongoose.model('User');
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);
module.exports = (function(){
  return{
    createUser: function(req, res){
      req.body.password = bcrypt.hashSync(req.body.password, salt);
      var possibleEmail = req.body.email;
      User.findOne({email : possibleEmail}, function (err,user){
        if(err){
          res.json({err:err});
        }
        if(user){
          return res.json({err:'Email is already taken!'});
        }
        if(err){return next(err);}
        else {
      console.log('in users controller');
      console.log(req.body);
          var user = new User({name: req.body.name, email: req.body.email, password: req.body.password});
          user.save(function(err){
            if(err){
              console.log('error trying to create!');
              res.json({err: err});
            } else {
              res.json(true);
              }
          })
        }
      })
    },
    getAllUsers: function(req, res){
      User.find({}, function(err, results){
        if(err) {
         console.log(err);
        } else {
         res.json(results);
        }
      })
    },
    addFriend: function(req, res){
      User.findOne({_id: req.user.id}, function(err, user){
        user.friends.push(req.body);
        user.save(function(err){
          res.json(err);
        })
      console.log(req.user, 'current user in add Friend model');
      console.log(req.body, 'req in user model');
      })
    },
    showUser: function(req, res)
		{
      console.log(req.params.id);
			User.find({_id: req.params.id}, function(err, results){
				if(err) {
					res.json({status:'failed', err:err})
				} else {
					res.json(results);
				}
			}).limit(1)
		},

    removeFriend: function(req, res){
      console.log(req.body.user_id, 'user id');
      console.log(req.body.friend_id, 'friend id');
      console.log(req.body.friend_index, 'index of object friend');
      
      // User.findOne({_id: req.body.user_id}, function(err, user){
      //   user.friends({_id: req.body.friend_id}).remove();
      //   user.save(function(err){
      //     res.json(err);
      //   })
      // })

      // User.friends._id(req.body.friend_id).remove();
      // User.save(function (err) {
      //   if (err) return handleError(err);
      //   console.log('the sub-doc was removed')
      // });

      User.findById(req.body.user_id, function(err, post){
        console.log(post.friends.pull({_id: req.body.friend_id}));
        if(!err){
          var docs = post.friends.id(req.body.friend_id).remove();
          // post.friends[req.body.friend_index].remove();
          // post.friends.pull({_id: req.body.friend_id});
;         docs.save(function (err){
            if(err){
              console.log(err);
            }
          })
        }
      })

      // User.update({_id: ObjectId(req.body.user_id)}, 
      //             {$pull: {friends: {_id: ObjectId(req.body.friend_id)}}}, true);
     
    }
  }
})();
