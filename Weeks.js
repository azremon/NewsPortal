

const { Schema, model } = require('mongoose')


const weeksSchema = new Schema({


    // language
    // date_of_post
    // slider_headline
    // ref_link
    // slider_details
    // slider_img_name



    language: {
        type: String,
        required: false,
        trim: true,
        minlength: 2,
        maxlength: 30
    },

    date_of_post: {
        type: Date,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 30
    },



    weeks_news_headline: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },


    ref_link: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 1000
    },



    weeks_news_details: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 2000
    },


    weeks_news_img_name: {
        type: String,
        required: true,
        trim: true,
    },










});


const Weeks = model('Weeks', weeksSchema);

module.exports = Weeks
