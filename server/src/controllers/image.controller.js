const Image = require('../models/image.model');

// GET 
getImg = async (req, res) => {
    const image = await Image.findById(req.params.id);
    res.status(200).json(image);
};

// POST
newImage = (req, res) => {
  console.log(req.files)
  const image = new Image({
    data: req.files.image.data,
    contentType: req.files.image.mimetype
  })
  image.save((err, image) => {
    if (err) res.status(400).json(err);
    else res.status(201).json(image);
  });
};

module.exports = { newImage, getImg }