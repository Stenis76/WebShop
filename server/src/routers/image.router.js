const express = require("express");
const router = express.Router();
const fileUpload = require('express-fileupload');
const { newImage } = require("../controllers/image.controller");

router.use(fileUpload({}))

router.post("/upload", (req, res) => {
    newImage(req, res)
  });

module.exports = router;