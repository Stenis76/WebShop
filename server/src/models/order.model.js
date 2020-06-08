const mongoose = require("mongoose");
const { ProductSchema } = require("./product.model");

const OrderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: "User",
  },
  productId: {
    type: [ProductSchema],
    required: true,
    trim: true,
  },
  freightId: {
    type: mongoose.Types.ObjectId,
    required: true,
    trim: true,
    ref: "Freight",
  },
  paymentMethod: {
    type: String,
    required: true,
    trim: true,
  },
  activeOrder: {
    type: Boolean,
    required: true,
    trim: true,
  },
});

const Order = mongoose.model("Order", OrderSchema);
module.exports = Order;
