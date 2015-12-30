var mongoose = require('mongoose');
var Event = mongoose.model('Event');
var User = mongoose.model('User');

module.exports = (function(){
	return {
		addEvent: function(req, res){
			var events = new Event(req.body);
  			events.save(function(err, record){
  				if(err){
  					res.json({status:'failed', err:err})
  				}
  				else{
  					User.update({email: req.body.email}, {$inc: { events: 1 }}, {multi: true}, function(err1, record1) {
		  				if(err){
		  					res.json({status:'failed', err:err})
		  				}
		  				else{
		  					res.json({status:'success'})
		  				}
		  			})
  				}
  			})
		},
		getEvents: function(req, res){
			Event.find({}).populate('comments').populate('comments.user').populate('user').exec(function(err, events){
				    res.json(events);
      })
		},
    getEventsById: function(req, res){
      Event.find({_id: req.params.id}).populate('comments').populate('comments.user').populate('user').exec(function(err, events){
				    res.json(events);
			})
		},
  		getEventById: function(req, res)	{
        Event.find({_id:req.params.id}).populate('comments').populate('comments.user').populate('user').exec(function(err, events){
              console.log(events);
  				    res.json(events);
        })
	    }
  }
})();
