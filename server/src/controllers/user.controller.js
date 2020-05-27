const bcrypt = require("bcrypt");
const User = require("../models/user.model");

// GET ALL
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
};
// GET ONE
const getOneById = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};
// CREATE NEW USER
const newUser = async (req, res) => {
  const userData = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phonenumber: "",
    email: req.body.email,
    address: "",
    postcode: "",
    city: "",
    creditcardnumber: "",
    password: req.body.password,
    role: "customer",
  };

  User.findOne({ email: userData.email }, (err, queriedUser) => {
    if (err) {
      console.log("Error finding user in database", err);
      return;
    }

    if (!queriedUser) {
      User.create(userData, (err, user) => {
        if (err) {
          console.log(err);

          res.status(400).json(err);
        } else {
          // store authentication session
          // req.session.userId = user._id;

          res.status(201).json({ status: "Authenticated", user });
        }
      });
    } else {
      res.status(401).json({ status: "User-name already taken" });
    }
  });
};

// LOG IN
const logInUser = async (req, res) => {
  await User.find({ email: req.body.email })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed at start",
        });
      }
      bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (err) {
          return res.status(401).json({
            message: " Auth failed",
          });
        }
        if (result) {
          req.session.userId = user[0]._id;

          return res.status(200).json({
            message: "Auth successful",
            user,
          });
        }
        res.status(401).json({
          message: " Auth failed",
        });
      });
    })
    .catch((error) => {
      res.status(500).json({
        error: error,
      });
    });
};

// LOGOUT

const logOutUser = (req, res, next) => {
  if (req.session) {
    // delete session object
    req.session.destroy(function (err) {
      if (err) {
        return next(err);
      } else {
        return res.redirect("/");
      }
    });
  }
};

// DELETE USER
const deleteUser = async (req, res) => {
  try {
    const removedUser = await User.deleteOne({ _id: req.params.userId });
    res.status(200).json("User removed");
  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE USER
const updateUser = async (req, res) => {
  try {
    let user = await User.findById(req.params.userId);

    if (user) {
      user.firstname = user.firstname;
      user.lastname = user.lastname;
      user.phonenumber = req.body.phonenumber;
      user.email = user.email;
      user.address = req.body.address;
      user.postcode = req.body.postcode;
      user.city = req.body.city;
      user.creditcardnumber = req.body.creditcardnumber;
      user.password = user.password;
      user.role = "customer";
      await user.save();

      res.status(200).json(user);
    } else {
      res.status(404).json({ status: "User not found in db" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllUsers,
  getOneById,
  newUser,
  logInUser,
  logOutUser,
  deleteUser,
  updateUser,
};
