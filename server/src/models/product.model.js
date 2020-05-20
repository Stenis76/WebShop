const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  imageUrl: {
    type: String,
    required: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    trim: true,
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  season: {
    type: String,
    required: true,
    trim: true,
  },
  size: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  description: {
    type: String,
    require: true,
  },
});





const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
