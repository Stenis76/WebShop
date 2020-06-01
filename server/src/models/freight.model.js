const mongoose = require("mongoose");

let freightSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  shipmentCompany: {
    type: String,
    required: true, 
  },
  orderId: {
    type: String,
    required: true
  },
  deliveryDate: {
    type: String,
    required: true
  },
  shippingCost: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("freight", freightSchema);
