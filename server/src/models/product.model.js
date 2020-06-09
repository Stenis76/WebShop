const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: mongoose.Types.ObjectId,
      required: true,
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
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

ProductSchema.virtual("imageUrl").get(function () {
  return "http://localhost:3002/api/images/" + this.image /*toString()*/;
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = { Product, ProductSchema };
