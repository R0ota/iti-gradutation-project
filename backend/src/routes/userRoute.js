const User = require("../models/userModel");
const express = require("express");
const router = express.Router();
const { authMiddleware, adminMiddleware } = require("../middleware/authentication");
const { getUserOrders } = require("../controllers/orderController");

// @desc    Get user profile
// @route   GET /user/profile
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findOne({
            _id: req.user._id
        }, { password: 0 }); // Exclude password from response
        
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        
        res.send(user);
    } catch (error) {
        res.status(400).send({
            error: error.message
        });
    }
};

// @desc    Get all users (Admin only)
// @route   GET /admin/all
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({}, { password: 0 }); // Exclude passwords
        res.send(users);
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

// @desc    Delete a user (Admin only)
// @route   DELETE /admin/:id
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) {
            return res.status(404).send({ message: "User not found" });
        }
        res.send({ message: "User deleted successfully" });
    } catch (error) {
        res.status(400).send({ error: error.message });
    }
};

// @desc    Get user orders
// @route   GET /user/orders
router.get("/orders", authMiddleware, getUserOrders);

router.get("/profile", authMiddleware, getUserProfile);
router.get("/all", authMiddleware, adminMiddleware, getAllUsers);
router.delete("/:id", authMiddleware, adminMiddleware, deleteUser);

module.exports = router;