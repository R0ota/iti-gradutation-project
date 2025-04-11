const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  username:  String , 

  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], required: true,default:"user" },
});
const User = mongoose.model("User", userSchema);
module.exports = User;
