const express = require("express");
const router = express.Router();
const Order = require("../models/order.model");
const {
  getAllOrders,
  getOneOrder,
  createNewOrder,
  deleteOrder,
  updateOrder,
} = require("../controllers/order.controller");

// GET ALL
router.get("/api/order", async (req, res) => {
  getAllOrders(req, res);
});

// GET ONE
router.get("/api/order/:orderId", (req, res) => {
  getOneOrder(req, res);
});

// CREATE
router.post("/api/neworder", (req, res) => {
  createNewOrder(req, res);
});

// DELETE
router.delete("/api/order/:orderId", async (req, res) => {
  deleteOrder(req, res);
});

// UPDATE
router.put("/api/order/:orderId", async (req, res) => {
  updateOrder(req, res);
});

module.exports = router;
