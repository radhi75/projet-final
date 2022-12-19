const product = require("../models/product");

exports.Addproduct = async (req, res) => {
  try {
    const prod = new product(req.body);
    await prod.save();
    res.status(200).send({ msg: "product added", prod });
  } catch (error) {
    res.status(500).send("couldn't add product");
  }
};

exports.Getproducts = async (req, res) => {
  try {
    const prod = await product.find();
    res.status(200).send({ msg: "list of products", prod });
  } catch (error) {
    res.status(500).send("couldn't get products");
  }
};

exports.Delproduct = async (req, res) => {
  try {
    await product.findByIdAndDelete(req.params.id);
    res.status(200).send({ msg: "deleted product" });
  } catch (error) {
    res.status(500).send("couldn't delete product");
  }
};

exports.Editproduc = async (req, res) => {
  try {
    const prod = await product.findByIdAndUpdate(
      req.params.id,
      { $set: { ...req.body } },
      { new: true }
    );
    res.status(200).send({ msg: "updated product", prod });
  } catch (error) {
    res.status(500).send("couldn't update product");
  }
};

exports.GetOneproduc = async (req, res) => {
  try {
    const prod = await product.findById(req.params.id);
    res.status(200).send({ msg: "my product", prod });
  } catch (error) {
    res.status(500).send("couldn't get my product");
  }
};
