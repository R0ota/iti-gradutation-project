const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();



router.post("/signup", async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
            role: req.body.role,
        });
        await user.save();
        res.send({ message: "User registered successfully" });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}
);

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).send({ message: "User not found" });
        }
        const isValidPassword = await bcrypt.compare(req.body.password, user.password);
        if (!isValidPassword) {
            return res.status(400).send({ message: "Invalid password" });
        }
        const token = jwt.sign({ _id: user._id,role:user.role }, process.env.JWT_SECRET);
        res.send({ token });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
}
);

module.exports = router;
