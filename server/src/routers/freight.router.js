const express = require("express");
const router = express.Router();

const FreightModel = require("../models/freight.model");

//GET all freight options
router.get("/api/freight", async (req, res)=> {
  try {
    let freightOptions = await FreightModel.find();
    res.status(200).json(freightOptions);
  } catch (err) {
    res.status(400).json(err);
  }
});

// POST new freight method
router.post("/api/freight", async (req, res) => {
  console.log("detta funkar");
  
  let freight = req.body;
  try {
    const freightDoc = await new FreightModel(freight);
    const savedFreightDoc = await freightDoc.save();
    res.status(200).json(savedFreightDoc)
  } catch (err) {
    res.status(400).json(err)
  }
});

// DELETE
router.delete("/api/freight/:shipmentId", async (req, res) => {
  try {
    const removedFreight = await FreightModel.deleteOne({ _id: req.params.shipmentId });
    res.status(200).json("Shipment removed");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;