

const { Schema, model } = require('mongoose')


const latestSchema = new Schema({


    // language
    // date_of_post
    // latest_news_headline
    // ref_link
    // latest_news_details
    // latest_news_img_name



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



    latest_news_headline: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 150
    },


    ref_link: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },



    latest_news_details: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 2000
    },


    latest_news_img_name: {
        type: String,
        required: true,
        trim: true,
    },










});


const Latest = model('Latest', latestSchema);

module.exports = Latest
