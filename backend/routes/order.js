const express = require('express');
const router = express.Router();
const Order = require('../models/Order');
const Membership = require('../models/Membership');
const User = require('../models/User');
const ExpressError = require('../utils/ExpressError');
const wrapAsync = require('../utils/wrapAsync');
const { validateOrder } = require('../middleware/validation');

// 🔹 Create new order
// router.post('/add', validateOrder, wrapAsync(async (req, res) => {
//   const { userId, membershipId } = req.body;

//   const membership = await Membership.findById(membershipId);
//   if (!membership) throw new ExpressError('Membership not found', 404);

//   const order = new Order({
//     user: userId,
//     membership: membership._id,
//     membershipName: membership.name,
//     membershipPrice: membership.price,
//     status: 'active'
//   });

//   await order.save();

//   // Link order to user
//   await User.findByIdAndUpdate(
//     userId,
//     { $addToSet: { order: order._id } }, // prevent duplicates
//     { new: true }
//   );

//   res.status(201).json({
//     success: true,
//     message: 'Order placed successfully',
//     data: order
//   });
// }));

// 🔹 Get all orders (admin)
router.get('/all', wrapAsync(async (req, res) => {
  const orders = await Order.find()
    .populate('user', 'username email') // only send necessary fields
    .populate('membership', 'name price');

  res.json({ success: true, data: orders });
}));

// 🔹 Update order status (admin)
// router.put('/update/:id', wrapAsync(async (req, res) => {
//   const { status } = req.body;
//   if (!status) throw new ExpressError('Status is required', 400);

//   const order = await Order.findByIdAndUpdate(
//     req.params.id,
//     { status },
//     { new: true, runValidators: true }
//   );

//   if (!order) throw new ExpressError('Order not found', 404);

//   res.json({
//     success: true,
//     message: 'Order status updated',
//     data: order
//   });
// }));

module.exports = router;
