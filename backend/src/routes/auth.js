const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();

const User = require("../models/userModel");
const {
  forgetPassword,
  verifyToken,
  resetPassword,
} = require("../controllers/authController");

const User = require("../models/userModel");
const {
  forgetPassword,
  verifyToken,
  resetPassword,
} = require("../controllers/authController");

router.post("/signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
      role: req.body.role || "user",
    });
    await user.save();

    // Generate token for the newly created user
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET
    );

    // Return user object and token
    res.send({
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }
    const isValidPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isValidPassword) {
      return res.status(400).send({ message: "Invalid password" });
    }
    const token = jwt.sign(
      { _id: user._id, role: user.role },
      process.env.JWT_SECRET
    );
    res.send({ token });
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

router.post("/forgetpassword", forgetPassword);

router.get("/verifytoken", verifyToken);

router.post("/resetpassword", resetPassword);

module.exports = router;
