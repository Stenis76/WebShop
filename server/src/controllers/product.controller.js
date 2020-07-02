const { Product, ProductSchema } = require("../models/product.model");

// GET ALL
getAllProducts = async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
};

// GET ONE

getOneProduct = (req, res) => {
  Product.findById(req.params.productId)
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(500).json(err));
};

// CREATE
newProduct = (req, res) => {
  const product = new Product({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    category: req.body.category,
    season: req.body.season,
    inventory: {
      small: req.body.inventory.small,
      medium: req.body.inventory.medium,
      large: req.body.inventory.large,
      xlarge: req.body.inventory.xlarge,
    },
    description: req.body.description,
  });

  product.save((err, product) => {
    if (err) res.status(400).json(err);
    else res.status(201).json(product);
  });
};

// DELETE
deleteOneProduct = async (req, res) => {
  try {
    const removedProduct = await Product.deleteOne({
      _id: req.params.productId,
    });
    res.status(200).json({ status: "removed product" });
  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE
updateProduct = async (req, res) => {
  try {
    let productUpdate = await Product.findById(req.params.productId);

    productUpdate.inventory.small = req.body.inventory.small;
    productUpdate.price = req.body.price;
    productUpdate.name = req.body.name;
    productUpdate.description = req.body.description;

    await productUpdate.save();
    res.status(200).json({ message: "ok" });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllProducts,
  getOneProduct,
  deleteOneProduct,
  newProduct,
  updateProduct,
};
