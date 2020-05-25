const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const cors = require("cors");
const cookieSession = require("cookie-session");
const app = express();
const { logIn } = require("./routers/user.routero");
const User = require("../models/user.model");
const router = require("./routers/user.router");



/* app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3002"],
    credentials: true,
  })
);

app.use(cookieSession({
  name: 'GaryLovesCookies',
  maxAge: 1000 * 1000, // short duration to check easily while developing
  secret: 'apskda9s8d7236uvjbkajdnfhoias89d70f62t3yhdjhvfuastadcych',
  httpOnly: true,
}))
 */
// login
const logIn = (logIn) => {
console.log("log in funtionen");
  if (req.body.email && req.body.password) {
    User.authenticate(req.body.email, req.body.password, (err, user) => {
      if (err) {
        res.status(401).json({
          status: "Wrong name"
        });
      } else if (user) {
        //store authentication session
        req.session.userId = user._id;

        res.status(200).json({
          status: "Authenticated",
          user: {
            _id: user._id,
            email: user.email,
          },
        });
      } else {
        res.status(401).json({
          status: "Wrong password"
        });
      }
    });
  }
}

router.post("/api/users/login", async (req, res) => {
  await UserModel.find({ name: req.body.name })
    .exec()
    .then((user) => {
      if (user.length < 1) {
        return res.status(401).json({
          message: "Auth failed",
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
            userName: user[0].name,
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

//module.exports = router;