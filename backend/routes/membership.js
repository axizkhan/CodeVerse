const express = require('express');
const router = express.Router();
const Membership = require('../models/Membership');
const ExpressError = require('../utils/ExpressError');
const wrapAsync = require('../utils/wrapAsync');
const { validateMembership } = require('../middleware/validation');

// 🔹 Add a new membership
router.post('/add', validateMembership, wrapAsync(async (req, res) => {
  const membership = new Membership(req.body);
  await membership.save();
  res.status(201).json({ success: true, message: 'Membership created', data: membership });
}));

// 🔹 Update a membership
router.put('/update/:id', validateMembership, wrapAsync(async (req, res) => {
  const updated = await Membership.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
  if (!updated) throw new ExpressError('Membership not found', 404);
  res.json({ success: true, message: 'Membership updated', data: updated });
}));

// 🔹 Get all memberships
router.get('/all', wrapAsync(async (req, res) => {
  const memberships = await Membership.find();
  res.json({ success: true, data: memberships });
}));

// 🔹 Get a single membership by ID
router.get('/:id', wrapAsync(async (req, res) => {
  const membership = await Membership.findById(req.params.id);
  if (!membership) throw new ExpressError('Membership not found', 404);
  res.json({ success: true, data: membership });
}));

// 🔹 Delete a membership
router.delete('/delete/:id', wrapAsync(async (req, res) => {
  const deleted = await Membership.findByIdAndDelete(req.params.id);
  if (!deleted) throw new ExpressError('Membership not found', 404);
  res.json({ success: true, message: 'Membership deleted' });
}));

module.exports = router;
