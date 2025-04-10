const Cart = require("../models/cartModel");
const Product = require("../models/productModel");

// @desc    Add product to cart
// @route   POST /cart/add
// @access  Private
const addToCart = async (req, res) => {
    try {
      const  userId  = req.user._id;
    const { productId, color, quantity } = req.body;

    const product = await Product.findById(productId);
    if (!product) return res.status(404).json({ message: "Product not found" });

    const selectedColor = product.colors.find((c) => c.color === color);
    if (!selectedColor)
      return res.status(400).json({ message: "Invalid color option" });

    if (selectedColor.stock < quantity) {
      return res.status(400).json({ message: "Insufficient stock available" });
    }

    let cart = await Cart.findOne({ user: userId });
    if (!cart) {
      cart = new Cart({ user: userId, products: [], totalPrice: 0 });
    }

    const existingProductIndex = cart.products.findIndex(
      (p) => p.product.toString() === productId && p.color === color
    );
    if (existingProductIndex !== -1) {
      cart.products[existingProductIndex].quantity += quantity;
    } else {
      cart.products.push({
        product: productId,
        color,
        quantity,
        price: product.price,
      });
    }

    cart.totalPrice = cart.products.reduce(
      (total, p) => total + p.price * p.quantity,
      0
    );

    await cart.save();
    res.json({ message: "Product added to cart", cart });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// @desc    Get user's cart
// @route   GET /cart
// @access  Private
const getCart = async (req, res) => {
  try {
    const userId  = req.user._id;
    const cart = await Cart.findOne({ user: userId }).populate(
      "products"
    );

    if (!cart || !cart.products.length) return res.status(200).json({ message: "Cart is empty" });

    res.json(cart);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};


// @desc    Remove product or reduce quantity from cart
// @route   DELETE /cart/remove
// @access  Private
const removeFromCart = async (req, res) => {
    try {
        const  userId  = req.user._id;
      const {  productId, color, quantity } = req.body;
  
      const cart = await Cart.findOne({ user: userId });
      if (!cart) return res.status(404).json({ message: "Cart not found" });
  
      const productIndex = cart.products.findIndex(
        (p) => p.product.toString() === productId && p.color === color
      );
  
      if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found in cart" });
      }
  
      const productInCart = cart.products[productIndex];
  
      if (quantity && productInCart.quantity > quantity) {
        // Reduce the quantity of the product
        productInCart.quantity -= quantity;
      } else {
        // Remove the product completely if quantity is not specified or is equal to or greater than the current quantity
        cart.products.splice(productIndex, 1);
      }
  
      // Recalculate the total price
      cart.totalPrice = cart.products.reduce(
        (total, p) => total + p.price * p.quantity,
        0
      );
  
      await cart.save();
      res.json({ message: "Product updated in cart", cart });
    } catch (error) {
      res.status(500).json({ message: "Server error", error: error.message });
    }
  };

module.exports = { addToCart, getCart, removeFromCart };




