var mongoose = require('mongoose');

var RestaurantSchema = new mongoose.Schema({
		name: String,
    id: String,
    location: Object,
    image_url: String,
    display_phone: String,
    rating: Number,
    categories: Array,
    rating_img_url: String,
		url: String,
    created_at: {type: Date, default: new Date},
		updated_at: {type: Date, default: new Date}
})

var Restaurant = mongoose.model('Restaurant', RestaurantSchema);
