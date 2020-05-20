const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");



const User = require("../models/user.model");

// GET ALL
router.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET ONE BY ID
router.get("/api/users/:userId", async (req, res) => {
  try {
    const user = await User.findById(req.params.userId);
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE
router.post("/api/newuser", (req, res) => {
  console.log("här är jag");
  const userData = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    phonenumber: "",
    email: req.body.email,
    adress: "",
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
});

// LOGIN
/* router.post("/api/log-in", (req, res) => {
  logIn(req.body.email, req.body.password) 
    return console.log("funkar");
    
  
}); */

router.post("/api/users/login", async (req, res) => {
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
          req.session.userId = user[0]._id

          return res.status(200).json({
            message: "Auth successful",
            userId: user[0]._id,
            email: user[0].email,
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
});

// LOGOUT
router.get("/api/logout/:userId", (req, res, next) => {
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
router.delete("/api/users/:userId", async (req, res) => {
  try {
    const removedUser = await User.deleteOne({ _id: req.params.userId });
    res.status(200).json("User removed");
  } catch (err) {
    res.status(500).json(err);
  }
});

// UPDATE
router.put("/api/users/:userId", async (req, res) => {
  try {
    let user = await User.findById(req.params.userId);

    if (user) {
      user.firstname = user.firstname;
      user.lastname = user.lastname;
      user.phonenumber = req.body.phonenumber;
      user.email = user.email;
      user.adress = req.body.adress;
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
});

//exports.logIn = logIn;
module.exports = router;
