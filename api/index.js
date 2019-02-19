const router = require('express').Router();

router.use('/health', require('./health/health.router'));
router.use('/todos', require('./todo/todo.router'));

module.exports = router;