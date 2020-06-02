const Image = require('../models/image.model');

// GET ALL
getImg = async (req, res) => {
  try {
    const image = await Image.find();
    res.status(200).json(image);
    res.send(image.data)
  } catch (err) {
    res.status(500).json(err);
  }
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