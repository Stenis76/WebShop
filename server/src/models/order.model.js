const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  productId: {
    type: Array,
    required: true,
    trim: true,
  },
  freightId: {
    type: String,
    required: true,
    trim: true,
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

var Order = mongoose.model("Order", OrderSchema);
module.exports = Order;