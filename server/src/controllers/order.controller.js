const Order = require("../models/order.model");

// GET ALL
getAllOrders = async (req, res) => {
  await Order.find()
    .populate("userId")
    .populate("freightId")

    .then((order) => res.status(200).json(order))
    .catch((err) => res.status(500).json(err));
};

// GET ONE
getOneOrder = async (req, res) => {
  await Order.findById(req.params.orderId)
    .populate("userId")

    .then((post) => res.status(200).json(post))
    .catch((err) => res.status(500).json(err));
};

// CREATE
createNewOrder = (req, res) => {
  const order = new Order(req.body);

  order.save((err, order) => {
    if (err) {
      console.log("error", err);
      res.status(400).json(err);
    } else res.status(201).json(order);
  });
};

// DELETE
deleteOrder = async (req, res) => {
  try {
    const removedorder = await Order.deleteOne({
      _id: req.params.orderId,
    });
    res.status(200).json({ status: "removed order" });
  } catch (err) {
    res.status(500).json(err);
  }
};

// UPDATE
updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.updateOne(
      { _id: req.params.orderId },
      {
        $set: {
          userId: req.body.userId,
          productId: req.body.productId,
          freightId: req.body.freightId,
          paymentMethod: req.body.paymentMethod,
          activeOrder: req.body.activeOrder,
        },
      }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAllOrders,
  getOneOrder,
  createNewOrder,
  deleteOrder,
  updateOrder,
};
