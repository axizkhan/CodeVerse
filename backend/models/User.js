// models/user.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    default: "",
  },
  status: {
    type: String,
    enum: ["Active", "Blacklisted", "Login"],
    default: "Active",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  order: [
    {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
  ],
  isVerified: {
    type: Boolean,
    default: false,
  },
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);
