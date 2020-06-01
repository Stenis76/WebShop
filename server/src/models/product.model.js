const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  routeName: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  }
});

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
const Category = mongoose.model("Category", CategorySchema);

module.exports = Product, Category;
