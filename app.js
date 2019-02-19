const express = require('express');
const helmet = require('helmet');
require('express-async-errors');

const app = express();
const apiRouter = require('./api');
const errorHandler = require('./api/middleware/errorHandler');

app.use(helmet())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use('/api', apiRouter);

app.use(errorHandler)

module.exports = app;