const Order = require("../models/order");

exports.setOrder = (req, res) => {
  const { nameonCake, price, address, qty, product, user_id } = req.body;
  const order = new Order({
    nameonCake,
    price,
    address,
    qty,
    product,
    user_id


  });

  order.save(
    (err, order) => {
      if (err) return res.status(400).json({ err })
      if (order) {
        res.status(201).json({ order })
      }

    }
  )
}


exports.getOrders = (req, res) => {
  Order.find({}).exec((error, order) => {
    if (error) return res.status(400).json({ error });
    if (!error && order) {
      res.status(200).json({ order });

    }
  });
}