const express = require('express');
const router = express.Router();

const User = require('../models/User');
const Language = require('../models/Language');
const Chapter = require('../models/Chapter');
const Order = require('../models/Order');
const Membership = require('../models/Membership');
const ExpressError = require('../utils/ExpressError');
const wrapAsync = require('../utils/wrapAsync'); // <-- import

router.get('/dashboard-stats', wrapAsync(async (req, res) => {
  const totalUsers = await User.countDocuments();
  const loggedInUsers = await User.countDocuments({ status: 'Login' });
  const totalLanguages = await Language.countDocuments();
  const totalOrders = await Order.countDocuments();
  const totalMemberships = await Membership.countDocuments();
  const totalSales = await Order.aggregate([
    { $match: { status: 'active' } },
    { $group: { _id: null, total: { $sum: "$membershipPrice" } } }
  ]);

  res.json({
    totalUsers,
    loggedInUsers,
    totalLanguages,
    totalOrders,
    totalMemberships,
    totalSales: totalSales[0]?.total || 0
  });
}));

router.get('/language-trends', wrapAsync(async (req, res) => {
  const languages = await Language.find({}, 'name trend');
  if (!languages.length) throw new ExpressError('No languages found', 404);
  res.json(languages);
}));

router.get('/language-chapter-counts', wrapAsync(async (req, res) => {
  const languages = await Language.find().populate('topics');
  if (!languages.length) throw new ExpressError('No languages found', 404);
  const result = languages.map(lang => ({
    name: lang.name,
    chapterCount: lang.topics.length
  }));
  res.json(result);
}));

router.get('/membership-popularity', wrapAsync(async (req, res) => {
  const data = await Order.aggregate([
    {
      $group: {
        _id: '$membershipName',
        count: { $sum: 1 }
      }
    }
  ]);
  if (!data.length) throw new ExpressError('No membership popularity data found', 404);
  res.json(data);
}));

router.get('/monthly-orders', wrapAsync(async (req, res) => {
  const now = new Date();
  const sixMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 5, 1);

  const orders = await Order.aggregate([
    {
      $match: {
        createdAt: { $gte: sixMonthsAgo }
      }
    },
    {
      $group: {
        _id: { $month: "$createdAt" },
        count: { $sum: 1 }
      }
    },
    {
      $sort: { _id: 1 }
    }
  ]);
  if (!orders.length) throw new ExpressError('No monthly orders data found', 404);
  res.json(orders);
}));

router.get('/membership-expiring', wrapAsync(async (req, res) => {
  const today = new Date();
  const expiryDate = new Date(today);
  expiryDate.setDate(today.getDate() + 7);

  const expiring = await Order.find({
    status: 'active',
    purchaseDate: { $lte: expiryDate }
  }).populate('user membership');

  if (!expiring.length) throw new ExpressError('No expiring memberships found', 404);
  res.json(expiring);
}));

module.exports = router;