const cors = require("cors");
const express = require("express");
const cookieSession = require("cookie-session");
const bcrypt = require("bcrypt");


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
}))