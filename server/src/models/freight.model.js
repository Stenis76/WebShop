const mongoose = require("mongoose");

let freightSchema = mongoose.Schema({
  shipmentId: String,
  orderId: String,
  deliveryDate: String,
  price: String
});

let FreightModel = mongoose.model("freight", freightSchema)
module.exports = FreightModel

