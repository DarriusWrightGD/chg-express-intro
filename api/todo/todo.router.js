const router = require('express').Router();
const todoController = require('./todo.controller');
const validateSchema = require('./../middleware/validateSchema');

const { body, param } = require('express-validator/check');
const isNumericId = param('id').isNumeric().withMessage('id must be a numeric value');

router.get('/', todoController.getTodos);

router.get('/:id', [
  isNumericId,
  validateSchema
], todoController.getTodo);

router.post('/', [
  body('title').isString(),
  validateSchema
], todoController.addTodo);

router.put('/:id', [
  isNumericId,
  validateSchema
], todoController.updateTodo);

router.delete('/:id', [
  isNumericId,
  validateSchema
], todoController.deleteTodo);

module.exports = router;