const express = require("express");
const {
  Addproduct,
  Getproducts,
  Delproduct,
  Editproduc,
  GetOneproduc,
} = require("../controlles/product");

const ProductRoute = express.Router();

ProductRoute.post("/addproduct", Addproduct);
ProductRoute.get("/getproduct", Getproducts);
ProductRoute.delete("/delproduct/:id", Delproduct);
ProductRoute.put("/editproduct/:id", Editproduc);
ProductRoute.get("/getOneproduct/:id", GetOneproduc);

module.exports = ProductRoute;
