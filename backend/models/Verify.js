// models/verifyToken.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const verifySchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  token: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 60 * 60 * 48, // 48 hours in seconds
  },
});

module.exports = mongoose.model("VerifyToken", verifySchema);
