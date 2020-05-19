const mongoose = require("mongoose");

let freightSchema = mongoose.Schema({
  shipmentId: String,
  orderId: String,
  deliveryDate: String,
  price: String
});

module.exports = mongoose.model("freight", freightSchema)