const FreightModel = require("../models/freight.model");

//GET all freight options
const getAllFreightMethods = async (req, res) => {
  try {
    let freightOptions = await FreightModel.find();
    res.status(200).json(freightOptions);
  } catch (err) {
    res.status(400).json(err);
  }
};

// POST new freight method
const createNewFreightMethod = async (req, res) => {
  let freight = req.body;
  try {
    const freightDoc = await new FreightModel(freight);
    const savedFreightDoc = await freightDoc.save();
    res.status(200).json(savedFreightDoc);
  } catch (err) {
    res.status(400).json(err);
  }
};

// UPDATE freight method
const updateFreightMethod = async (req, res) => {
  try {
    const updatedFreight = await FreightModel.updateOne(
      { _id: req.params.freightId },
      {
        $set: {
          freightId: req.body.freightId,
          shipmentCompany: req.body.shipmentCompany,
          deliveryDate: req.body.deliveryDate,
          shippingCost: req.body.shippingCost,
        },
      }
    );
    res.status(200).json(updatedFreight);
  } catch (err) {
    res.status(500).json(err);
  }
};

// DELETE
const deleteFreightMethod = async (req, res) => {
  try {
    const removedFreight = await FreightModel.deleteOne({
      _id: req.params.freightId,
    });
    res.status(200).json("Shipment removed");
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllFreightMethods,
  createNewFreightMethod,
  updateFreightMethod,
  deleteFreightMethod,
};
