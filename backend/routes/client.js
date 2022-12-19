const express = require("express");
const { Register, Login, Deluser, EditUser } = require("../controlles/client");
const { isAuth } = require("../middlewear/isAuth");
const {
  registerValidator,
  validation,
  loginValidator,
} = require("../middlewear/validation");

const clientRoute = express.Router();

clientRoute.post("/register", registerValidator, validation, Register);
clientRoute.post("/login", loginValidator, validation, Login);
clientRoute.get("/current", isAuth, (req, res) => {
  res.send({ client: req.user });
});
clientRoute.delete("/delclient/:id", Deluser);
clientRoute.put("/edit/:id", EditUser);
module.exports = clientRoute;
