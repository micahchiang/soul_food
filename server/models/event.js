var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema ({
	author: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
	message: String
})

var EventSchema = new mongoose.Schema({
	 	date: Date,
        location: String,
        description: String,
        user ref: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        [comments ref]: [Comments],
        created_at: {type: Date, default: new Date}
})

var Event = mongoose.model('Event', EventSchema);