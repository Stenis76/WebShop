const express = require("express");
const app = express();
// const session = require("express-session");
// const cors = require("cors");
require("dotenv").config();

const { run } = require("./controllers/mongo");

/* Import routes */

const userRouter = require("./routers/user.router");

// run the database
run();

/* Middelwares */
// app.use(
//   cors({
//     origin: ["http://localhost:3000", "http://localhost:3002"],
//     credentials: true,
//   })
// );

// Make sure to parse req.body as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//use sessions for tracking logins

// app.use(
//   session({
//     name: "hello",
//     secret: "work hard",
//     resave: false,
//     saveUninitialized: false,
//     cookie: {
//       maxAge: 60 * 60 * 24,
//       secure: false,
//       sameSite: true,
//     },
//   })
// );

/* Add API resourses */

app.use(userRouter);
// app.use(postRouter);

const PORT = process.env.PORT || 8080;

/* Start server */
app.listen(PORT, () =>
  console.log(`Server is up and running on port: ${PORT}`)
);
