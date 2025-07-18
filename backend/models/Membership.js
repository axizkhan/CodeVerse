const mongoose = require('mongoose');

const membershipSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
  },
  perks: {
    type: [String],
    required: true,
  },
  description: {
    type: String,
  },
  termsAndConditions: {
    type: String,
  },
  cancellationPolicy: {
    type: String,
  }
}, { timestamps: true });

module.exports = mongoose.model('Membership', membershipSchema);
