const express = require("express");
const router = express.Router();
const Order = require("../models/order.model");

// GET ALL
router.get("/api/order", async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ONE
router.get("/api/order/:orderId", (req, res) => {
  Order.findById(req.params.orderId)
    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(500).json(err));
});

// CREATE
router.post("/api/neworder", (req, res) => {
  console.log("häääär");

  const order = new Order({
    userId: req.body.userId,
    productId: req.body.productId,
    freightId: req.body.freightId,
    paymentMethod: req.body.paymentMethod,
    activeOrder: req.body.activeOrder,
  });

  order.save((err, order) => {
    if (err) res.status(400).json(err);
    else res.status(201).json(order);
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
          imageuri: req.body.imageuri,
          price: req.body.price,
          category: req.body.category,
          season: req.body.season,
          stock: {
            small: req.body.stock.small,
            medium: req.body.stock.medium,
            large: req.body.large,
            xlarge: req.body.xlarge,
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
