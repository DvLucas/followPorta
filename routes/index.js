const portabilitiesRouter = require('./portabilities.router');
const usersRouter = require('./users.router');
const stateRouter = require('./state.router');
const userTypeRouter = require('./userType.router');
const express = require('express');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1/', router);

  router.use('/portabilities', portabilitiesRouter);
  router.use('/users', usersRouter);
  router.use('/statePortability', stateRouter);
  router.use('/usertype', userTypeRouter);
}

module.exports = routerApi;
