var mongoose = require('mongoose');
var bcrypt   = require('bcrypt');

var UserSchema = new mongoose.Schema({
		name: String,
    email: String,
    password: String,
    tastes: [],
  	activity_count: Number,
		authId: Number,
		friends: [],
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
