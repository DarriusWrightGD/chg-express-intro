const { validationResult } = require('express-validator/check');

module.exports = (req, res, next) => {
  let result;
  try {
    result = validationResult(req);
    result.throw();
    next();
  } catch (err) {
    res.status(400).send(result.array());
  }
}