const mongoose = require("mongoose");

async function connect() {
  try {
    const MONGODB_URI = process.env.MONGODB_URI;
    const options = { useNewUrlParser: true, useUnifiedTopology: true };

    await mongoose.connect(MONGODB_URI, options);
    console.log("Connected to database");
  } catch (err) {
    console.log("Failed to connect to database", err);
  }
}

async function run() {
  await connect();
}

module.exports = {
  run,
};
