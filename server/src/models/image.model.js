const mongoose = require('mongoose');

const ImgSchema = mongoose.Schema({
    data: Buffer,
    contentType: String,
});

module.exports = mongoose.model('uploadedImg', ImgSchema);