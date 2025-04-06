const router = require("express").Router();



const { addToCart, getCart, removeFromCart } = require("../controllers/cartController");


// @desc    Add product to cart
// @route   POST /cart/add
// @access  Private
router.post("/add", addToCart);


// @desc    Get user's cart
// @route   GET /cart
// @access  Private
router.get("/", getCart);

// @desc    Remove product from cart
// @route   DELETE /cart/remove
// @access  Private
router.delete("/remove", removeFromCart);

module.exports = router;
