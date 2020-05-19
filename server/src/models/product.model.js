const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  imageuri: {
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
  stock: {
    small: {
      type: String,
    },
    medium: {
      type: String,
    },
    large: {
      type: String,
    },
    xlarge: {
      type: Number,
    },
  },
  description: {
    type: String,
    require: true,
  },
});

var Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
