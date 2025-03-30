const Product = require("../models/productModel");
const router = require("express").Router();



const { authMiddleware, adminMiddleware } = require("../middleware/authentication");

// @desc    Get all products with filters, sorting, and pagination
// @route   GET /products
const getProducts = async (req, res) => {
  try {
    const { category, price, sort, page = 1, limit = 10 } = req.query;
    let filter = {};

    if (category) filter.category = category;
    if (price) filter.price = { $lte: Number(price) };

    const options = {
      sort: sort ? { price: sort === "asc" ? 1 : -1 } : {},
      skip: (page - 1) * limit,
      limit: Number(limit),
    };

    const products = await Product.find(filter).skip(options.skip).limit(options.limit).sort(options.sort);
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Get a single product by ID
// @route   GET /products/:id
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Product not found" });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Create a new product (Admin Only)
// @route   POST /products
const createProduct = async (req, res) => {
  try {
    const { name, description, price,SKU, colors, category } = req.body;

      // const newProduct = new Product({ name, price, description, category, stock });
      const newProduct = new Product({ name, description, price, SKU, colors, category });
    await newProduct.save();

    res.status(201).json(newProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Update a product (Admin Only)
// @route   PUT /products/:id
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });

    if (!updatedProduct) return res.status(404).json({ message: "Product not found" });

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// @desc    Delete a product (Admin Only)
// @route   DELETE /products/:id
const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: "Product not found" });

    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", authMiddleware, adminMiddleware, createProduct);
router.put("/:id", authMiddleware, adminMiddleware, updateProduct);
router.delete("/:id", authMiddleware, adminMiddleware, deleteProduct);



module.exports = router;
