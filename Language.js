const { Schema, model } = require('mongoose')


const languageSchema = new Schema({

    lang_name: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 50
    }

});


const Language = model('Language', languageSchema);

module.exports = Language
