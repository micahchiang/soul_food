var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
	return{
		
		register:function(req, res){
			console.log('attempting to add user', req.body);

			User.findOne({name: req.body.name}, function(err, user){
				if(!user){
					var newUser = new User(req.body);

					newUser.save(function(err){
						if(err){
							console.log(err);
							res.json(newUser);
						}
						else{
							res.json(user);
						}
					})
				}
			});
		
		findUser:function(req, res){
			console.log('requesting user', req.body);

			User.findOne({name: req.body.name}, function(err, user){
				if(err){
					console.log(err);
				}
				else{
					res.json(user);
				}
			});
		}
		}
	}
})();