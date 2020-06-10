const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: false,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: false,
    trim: true,
    unique: true,
  },
  address: {
    type: String,
    trim: true,
  },
  postCode: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    select: true,
  },
  role: {
    type: String,
    required: true,
  },
});

// hashing a password before saving it to the database
UserSchema.pre("save", function (next) {
  const user = this;

  // only hash the password if it has been modified (or is new)
  if (!user.isModified("password")) return next();

  bcrypt.hash(user.password, 10, function (err, hash) {
    if (err) {
      return next(err);
    }
    user.password = hash;
    next();
  });
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
