const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { isAuthenticated } = require("../authenticationMiddleware.js");
const {
  getAllUsers,
  getOneById,
  newUser,
  logInUser,
  logOutUser,
  deleteUser,
  updateUser,
} = require("../controllers/user.controller");

const User = require("../models/user.model");

// GET ALL
router.get("/api/users", async (req, res) => {
  getAllUsers(req, res);
});

// GET ONE BY ID
router.get("/api/users/:userId", async (req, res) => {
  getOneById(req, res);
});

// CREATE
router.post("/api/newuser", async (req, res) => {
  newUser(req, res);
});

// LOGIN
router.post("/api/users/login", async (req, res) => {
  logInUser(req, res);
});

// CHECKAUTH
router.post("/api/users/auth", async (req, res) => {
  console.log("session", req.session.userId);

  if (req.session.userId) {
    try {
      // find userid i dabasen
      const user = await User.findById(req.session.userId);
      console.log("användarkoll", user);

      if (user) {
        // req.session.userId = user[0]._id;
        console.log("userid", req.session.userId);
        console.log("användarkoll", user);

        user.password = "";

        return res.status(200).json({
          message: "Auth successful",
          user,
        });
      }
      console.log("hittad");
    } catch (err) {
      res.status(500).json(err);
    }
  }
});
// LOGOUT
router.post("/api/logout", isAuthenticated,logOutUser);

// DELETE
router.delete("/api/users/:userId", isAuthenticated, async (req, res) => {
  deleteUser(req, res);
});

// UPDATE
router.put("/api/users/:userId", async (req, res) => {
  updateUser(req, res);
});

module.exports = router;
