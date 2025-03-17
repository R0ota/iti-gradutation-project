const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();



router.post("/profile", async (req, res) => {
    try {
        const
            user = await User.findOne({
                _id: req.user._id
            });
        res.send(user);
    } catch (error) {
        res.status(400).send({
            error: error.message
        });
    }
}
);

module.exports = router;