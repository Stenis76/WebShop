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
    type: Array,
    required: true,
    trim: true,
  },
  season: {
    type: Array,
    required: true,
    trim: true,
  },
  inventory: {
    small: {
      type: String,
      quantity: {
        type: Number,
      },
    },
    medium: {
      type: String,
      quantity: {
        type: Number,
      },
    },
    large: {
      type: String,
      quantity: {
        type: Number,
      },
    },
    xlarge: {
      type: String,
      quantity: {
        type: Number,
      },
    },
  },
  description: {
    type: String,
    require: true,
  },
});







const Product = mongoose.model("Product", ProductSchema);

module.exports = {
  Product,
  ProductSchema
};
