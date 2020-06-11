const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getOneProduct,
  newProduct,
  deleteOneProduct,
  updateProduct,
} = require("../controllers/product.controller");

// GET ALL
router.get("/api/product", async (req, res) => {
  getAllProducts(req, res);
});

// GET ONE
router.get("/api/product/:productId", (req, res) => {
  getOneProduct(req, res);
});

// CREATE
router.post("/api/newproduct", (req, res) => {
  newProduct(req, res);
});

// DELETE
router.delete("/api/product/:productId", async (req, res) => {
  deleteOneProduct(req, res);
});

// UPDATE
router.put("/api/product/:productId", updateProduct);

// CREATE
router.post("/api/newproduct", (req, res) => {
  newProduct(req, res);
});

module.exports = router;
