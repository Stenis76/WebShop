const Image = require('../models/image.model');

// POST
newImage = (req, res) => {
    const image = new Image ({
        img: req.files
    })
    image.save((err, product) => {
        if (err) res.status(400).json(err);
        else res.status(201).json(image);
      });
};

module.exports = { newImage }