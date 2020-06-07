const mongoose = require("mongoose");

let freightSchema = mongoose.Schema({
  shipmentCompany: {
    type: String,
    required: true, 
  },
  orderId: {
    type: String,
    required: true
  },
  deliveryDate: {
    type: Number,
    required: true
  },
  shippingCost: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model("freight", freightSchema);
