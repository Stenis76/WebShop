const express = require("express");
const router = express.Router();
const {
  createNewFreightMethod,
  deleteFreightMethod,
  getAllFreightMethods,
  updateFreightMethod,
} = require("../controllers/freight.controller");

//GET all freight options
router.get("/api/freight", async (req, res) => {
  getAllFreightMethods(req, res);
});

// POST new freight method
router.post("/api/freight", async (req, res) => {
  createNewFreightMethod(req, res);
});

// UPDATE freight method
router.put("/api/freight/:freightId", async (req, res) => {
  updateFreightMethod(req, res);
});

// DELETE
router.delete("/api/freight/:freightId", async (req, res) => {
  deleteFreightMethod(req, res);
});

module.exports = router;
