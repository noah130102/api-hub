const mongoose = require("mongoose");

const User = new mongoose.Schema(
  {
    userName: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    healthCondition: { type: Number, required: true },
  },
  { collection: "user-data" }
);

module.exports = mongoose.model("UserData", User);
