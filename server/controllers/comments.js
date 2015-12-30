var mongoose = require('mongoose');
var User = mongoose.model('User');
var Event = mongoose.model('Event');

module.exports = (function () {
  return {
    getEventById: function(req, res){
			Event.find({ _id: req.params.id}, function (err, results) {
				if (err){
					res.json({status:'failed', err:err})
				} else {
					res.json(results);
				}
			})
		},
    addComment: function(req,res){
      Event.findOne({_id: req.params.id}, function(err,event){
      //  var events = new Event(req.body);
    //  console.log(req.body);
        event.comments.push(req.body);
        event.save(function(err,record){
          if(err){
            res.json({status:'failed', err:err})
          }
          else {
            User.update({email:req.body.email}, {$inc:{comments: 1}}, {multi:true}, function(err1, record1){
              if(err1) {
                res.json({status:'failed', err:err})
              }
              else {
                Event.update({_id: record.event_id}, {$inc: {events: 1}}, {multi: true}, function(err2, record2) {
                  if(err2){
                    res.json({status:'failed', err:err})
                  }
                  else {
                    res.json({status:'success'})
                  }
                })
              }
            })
            }
          })
        })
      },
    getCommentsById: function(req, res){
      console.log('do i reach here');
      Event.findOne({_id: req.params.id}).populate('comments').populate('comments.user').populate('user').exec(function(err, events){
        console.log(events);
        res.json(events);
			})
		},
  }
})();
