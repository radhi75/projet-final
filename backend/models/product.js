const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  image: String,
  prodName: { type: String, required: true },
  price: Number,
});

module.exports = mongoose.model("product", productSchema);
