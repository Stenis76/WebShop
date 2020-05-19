const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/user.model");
const { isAuthenticated } = require("../authenticationMiddleware.js");

// GET ALL
router.get("/api/users", isAuthenticated, async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ONE BY ID
router.get("/api/users/:userId", isAuthenticated, async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE
router.post("/api/newuser", (req, res) => {
  const userData = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phonenumber: req.body.phonenumber,
    email: req.body.email,
    adress: req.body.adress,
    postcode: req.body.postcode,
    city: req.body.city,
    creditcardnumber: req.body.creditcardnumber,
    password: req.body.password,
    role: "customer",
  };

  User.findOne({ username: userData.username }, (err, queriedUser) => {
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
          req.session.userId = user._id;

          res.status(201).json({ status: "Authenticated", user });
        }
      });
    } else {
      res.status(401).json({ status: "User-name already taken" });
    }
  });
});

// LOGIN
router.post("/api/login", (req, res) => {
  if (req.body.username && req.body.password) {
    User.authenticate(req.body.username, req.body.password, (err, user) => {
      if (err) {
        res.status(401).json({ status: "Wrong name" });
      } else if (user) {
        // store authentication session
        req.session.userId = user._id;

        res.status(200).json({
          status: "Authenticated",
          user: {
            _id: user._id,
            username: user.username,
            name: user.name,
            email: user.email,
          },
        });
      } else {
        res.status(401).json({ status: "Wrong password" });
      }
    });
  }
});

// LOGOUT
router.get("/api/logout/:userId", isAuthenticated, (req, res, next) => {
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
});

// DELETE
router.delete("/api/users/:userId", isAuthenticated, async (req, res) => {
  try {
    const removedUser = await User.deleteOne({ _id: req.params.userId });
    res.status(200).json("User removed");
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/api/users/:userId", isAuthenticated, async (req, res) => {
  try {
    let user = await User.findById(req.params.userId);

    if (user) {
      user.email = req.body.email;
      user.password = req.body.password;

      await user.save();

      res.status(200).json(user);
    } else {
      res.status(404).json({ status: "User not found in db" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
