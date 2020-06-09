const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const cookieSession = require("cookie-session");

const { run } = require("./controllers/mongo");


/* Import routes */

const userRouter = require("./routers/user.router");
const freightRouter = require("./routers/freight.router");
const productRouter = require("./routers/product.router");
const orderRouter = require("./routers/order.router");
const imgRouter = require("./routers/image.router");

// run the database
run();

app.use(
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
  unset: 'destroy'
}))


// Make sure to parse req.body as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* Add API resourses */

app.use(userRouter);
app.use(orderRouter);
app.use(freightRouter);
app.use(productRouter);
app.use(imgRouter);

const PORT = process.env.PORT || 8080;

/* Start server */
app.listen(PORT, () =>
  console.log(`Server is up and running on port: ${PORT}`)
);
