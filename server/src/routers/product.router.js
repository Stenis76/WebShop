const express = require("express");
const router = express.Router();
const Product = require("../models/product.model");

// GET ALL
router.get("/api/product", async (req, res) => {
  try {
    const product = await Product.find();
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ONE
router.get("/api/product/:productId", (req, res) => {
  Product.findById(req.params.productId)
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(500).json(err));
});

// CREATE
router.post("/api/newproduct", (req, res) => {
  const product = new Product({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
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
});

// DELETE
router.delete("/api/product/:productId", async (req, res) => {
  try {
    const removedProduct = await Product.deleteOne({
      _id: req.params.productId,
    });
    res.status(200).json({ status: "removed product" });
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/api/product/:productId", async (req, res) => {
  try {
    const updatedProduct = await Product.updateOne(
      { _id: req.params.productId },
      {
        $set: {
          name: req.body.name,
          imageUrl: req.body.imageUrl,
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
        },
      }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
