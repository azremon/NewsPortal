

const { Schema, model } = require('mongoose')


const breakingSchema = new Schema({


    // language
    // date_of_post
    // slider_headline
    // ref_link
    // slider_details
    // slider_img



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


    slider_headline: {
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
        maxlength: 1000
    },



    slider_details: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 2000
    },


    slider_img: {
        name: String,
        desc: String,
        img:
        {
            data: Buffer,
            contentType: String
        }
    },


    // slider_img: {


    //     // name: String,
    //     // desc: String,
    //     // img:
    //     // {
    //     //     data: Buffer,
    //     //     contentType: String
    //     // }
    // },

    // img_name: {
    //     type: String,
    //     required: true,
    //     trim: true,
    // },












});

const Breaking = model('Breaking', breakingSchema);

module.exports = Breaking
