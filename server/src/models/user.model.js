const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: false,
    trim: true,
  },
  lastname: {
    type: String,
    required: true,
    trim: true,
  },
  phonenumber: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: false,
    trim: true,
    unique: true,
  },
  adress: {
    type: String,
    required: false,
    trim: true,
  },
  postcode: {
    type: String,
    required: false,
    trim: true,
  },
  city: {
    type: String,
    required: false,
    trim: true,
  },
  creditcardnumber: {
    type: String,
    required: false,
    trim: true,
  },
  password: {
    type: String,
    required: true,
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

//authenticate input against database
UserSchema.statics.authenticate = function (email, password, callback) {
  User.findOne({ email: email }).exec(function (err, user) {
    if (err) {
      return callback(err);
    } else if (!user) {
      var err = new Error("User not found.");
      err.status = 401;
      return callback(err);
    }
    bcrypt.compare(password, user.password, function (err, result) {
      if (result === true) {
        return callback(null, user);
      } else {
        return callback();
      }
    });
  });
};

var User = mongoose.model("User", UserSchema);
module.exports = User;
