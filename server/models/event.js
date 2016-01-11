var mongoose = require('mongoose');

var Comments = mongoose.Schema({
	content: { type: String, trim: true},
	event_id: { type: String, trim: true},
	user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now }
});

var EventsSchema = new mongoose.Schema({
  title: {type: String, trim:true},
	date: { type: String, trim: true},
  time: { type: String, trim: true},
  location: {type:String, trim:true},
	description: { type: String, trim: true},
	user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
  comments: [Comments],
	restaurant: {type: mongoose.Schema.Types.ObjectId, ref: "Restaurant"},
  type_of_food: { type:String, trim: true},
	created_at: { type: Date, default: Date.now },
	updated_at: { type: Date, default: Date.now },
	attenders: []
});

mongoose.model('Event', EventsSchema);

EventsSchema.path('date').required(true, "Date field is required");
EventsSchema.path('type_of_food').required(true, "Type of food field is required");
EventsSchema.path('description').required(true, "Description field is required");
EventsSchema.path('time').required(true, "Time field is required");
