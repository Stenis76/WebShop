const express = require("express");
const router = express.Router();
const {
  createNewFreightMethod,
  deleteFreightMethod,
  getAllFreightMethods,
} = require("../controllers/freight.controller");
const FreightModel = require("../models/freight.model");

//GET all freight options
router.get("/api/freight", async (req, res) => {
  getAllFreightMethods(req, res);
});

// POST new freight method
router.post("/api/freight", async (req, res) => {
  createNewFreightMethod(req, res);
});

// DELETE
router.delete("/api/freight/:freightId", async (req, res) => {
  deleteFreightMethod(req, res);
});

module.exports = router;
