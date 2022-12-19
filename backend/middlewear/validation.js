const { body, validationResult } = require("express-validator");

exports.registerValidator = [
  body("email", "please add a valid email").isEmail(),
  body("password", "password must be longer then 6 caracters").isLength({
    min: 6,
  }),
];
exports.loginValidator = [
  body("email", "wrong email address").isEmail(),
  body("password", "password must be longer then 6 caracters").isLength({
    min: 6,
  }),
];

exports.validation = (req, res, next) => {
  const erros = validationResult(req);
  if (!erros.isEmpty()) {
    return res.status(400).json({ erros: erros.array() });
  }
  next();
};
