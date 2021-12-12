const express = require('express');
const StateService = require('../services/state.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createStateSchema, getStateSchema, updateStateSchema } = require('../schemas/state.schema');

const router = express.Router();
const service = new StateService();

router.get('/',
  async (req, res, next) => {
    try {
      const state = await service.find();
      res.json(state);
    } catch (error) {
      next(error);
    }
});

router.get('/:id',
  validatorHandler(getStateSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const state =await service.findOne(id);

      res.json(state);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createStateSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newState = await service.create(body);
    res.status(201).json(newState);
});

router.patch('/:id',
  validatorHandler(getStateSchema, 'params'),
  validatorHandler(updateStateSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const state = await service.update(id, body);
    res.json(state);
  } catch (error) {
    next(error);
  }
});

router.delete('/:id',async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});


module.exports = router;
