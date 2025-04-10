const mongoose = require("mongoose");

const OrderItemSchema = new mongoose.Schema({
  product: { type: mongoose.Schema.Types.ObjectId, ref: "Product", required: true },
  color: { type: String, required: true },
  quantity: { type: Number, required: true },
  price: { type: Number, required: true },
});

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  items: [OrderItemSchema],
  totalPrice: { type: Number, required: true },
  deliveryAddress: {
    fullName: String,
    phone: String,
    appartment: String,
    floor : String,
    bulding: String,
    street: String,
    city: String,
    zip: String,
    country: String,
  },
  isPaid: { type: Boolean, default: false },
  paidAt: Date,
  status: { type: String, default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Order", OrderSchema);
