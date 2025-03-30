const mongoose = require('mongoose');
const { Schema } = mongoose;

// Define the schema for product images
const ImageSchema = new Schema({
  url: { type: String, required: true },
  alt: { type: String },
  is_featured: { type: Boolean, default: false }
});

// Define the schema for product colors
const ColorSchema = new Schema({
  color: { type: String, required: true },
  stock: { type: Number, default: 0 },
  images: [ImageSchema]
});

// Define the main product schema
const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  SKU: { type: String, unique: true, required: true },
    colors: [ColorSchema],
    category: { type: String, required: true },
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
});

// Middleware to update the updated_at field on save
ProductSchema.pre('save', function (next) {
  this.updated_at = Date.now();
  next();
});

module.exports = mongoose.model('Product', ProductSchema);
