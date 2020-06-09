const mongoose = require('mongoose');

const ImgSchema = mongoose.Schema({
    data:{ type: Buffer, require: true },
    contentType: { type: String, require: true }
});


module.exports = mongoose.model('uploadedImg', ImgSchema);