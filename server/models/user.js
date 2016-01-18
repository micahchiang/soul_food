var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');

var UserSchema = new mongoose.Schema({
		name: String,
    email: {type: String, default: 'no@email.com'},
    password: String,
		location: String,
    tastes: [],
		events: {type: Number, trim:true},
  	comments: {type: Number, trim:true},
  	activity_count: Number,
		authId: Number,
		friends: [],
    favorite_restaurants: [],
		provider: String,
  	pictureURL: String,
  	json_info: Object,
    created_at: {type: Date, default: new Date}
})

// checking if password is valid
UserSchema.methods.validPassword = function(password) {
	console.log(password, 'in model user');
	console.log(this.password, 'password in database');

    return bcrypt.compareSync(password, this.password);
};


var User = mongoose.model('User', UserSchema);
UserSchema.path('email').required(true, "Email field is required");
// UserSchema.path('password').required(true, "Password field is required");
