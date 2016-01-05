var mongoose = require('mongoose');

var RestaurantSchema = new mongoose.Schema({
		name: String,
    yelp_id: String,
    location: Object,
    image_url: String,
    phone: Number,
    rating: Number,
    categories: Array,
    rating_img_url: String,
    created_at: {type: Date, default: new Date}
})

// checking if password is valid
// RestaurantSchema.methods.validPassword = function(password) {
// 	console.log(password, 'in model user');
// 	console.log(this.password, 'password in database');
//
//     return bcrypt.compareSync(password, this.password);
// };


var Restaurant = mongoose.model('Restaurant', RestaurantSchema);
// UserSchema.path('email').required(true, "Email field is required");
// UserSchema.path('password').required(true, "Password field is required");
