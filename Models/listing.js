const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const listingschema = new Schema({
    title: {
        type:String,
        required : true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
        default: "https://unsplash.com/photos/a-man-standing-in-a-cave-at-sunset-wTmGtmGQCjQ",
        set: (v) => v === "" ? "https://unsplash.com/photos/a-man-standing-in-a-cave-at-sunset-wTmGtmGQCjQ" : v,
    },

    price :{
        type: Number,
        required : true,
    },

    location :{
        type:String,
        required : true,
    },

    country : {
        type: String,
        required: true,
    }
})

const listing = mongoose.model ("listing", listingschema);
module.exports = listing;
