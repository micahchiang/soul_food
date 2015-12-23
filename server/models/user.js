var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
		name: String,
        email: String,
        password: String,
        tastes: [],
        activity_count: Number,      
        created_at: {type: Date, default: new Date}
})

var User = mongoose.model('User', UserSchema);