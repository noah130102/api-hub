const express = require("express");
const app = express();
const cors = require("cors")
const port = 1339;
const mongoose = require("mongoose");
const User = require("./models/userModel");

const { register, login } = require("./controllers/userController");

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/practice");

app.post("/api/register", (req, res) => {
  register(req, res);
});
app.post("/api/login", login);

app.listen(port, () => {
  console.log(`Server Started !! on port number ${port} !!`);
});
