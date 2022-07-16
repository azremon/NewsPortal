const { Schema, model } = require('mongoose')


const addressSchema = new Schema({

    road_address: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 50
    },

    region: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 30
    },

    country: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 30
    },

    phone: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 30
    },

    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 2,
        maxlength: 30
    }} , { timestamps: true}

);


const Address = model('Address', addressSchema);

module.exports = Address
