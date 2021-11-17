const portabilitiesRouter = require('./portabilities.router');
const usersRouter = require('./users.router');
const express = require('express');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1/', router);
  
  router.use('/portabilities', portabilitiesRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
