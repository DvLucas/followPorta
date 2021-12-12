const express = require('express');
const PortabilitiesHisService = require('../services/portabilitiesHis.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createPortabilityHisSchema, getPortabilityHisSchema, updatePortabilityHisSchema } = require('../schemas/portabilitiesHis.schema');

const router = express.Router();
const service = new PortabilitiesHisService();

router.get('/',
  async (req, res, next) => {
    try {
      const portabilitiesHis = await service.find(req.query);
      res.json(portabilitiesHis);
    } catch (error) {
      next(error);
    }
});

router.get('/:id',
  validatorHandler(getPortabilityHisSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const portability =await service.findOne(id);

      res.json(portability);
    } catch (error) {
      next(error);
    }
  }
);

router.post('/',
  validatorHandler(createPortabilityHisSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newPortabilityHis = await service.create(body);
      res.status(201).json(newPortabilityHis);
    } catch (error) {
      next(error);
    }
});

router.patch('/:id',
  validatorHandler(getPortabilityHisSchema, 'params'),
  validatorHandler(updatePortabilityHisSchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const portabilityHis = await service.update(id, body);
    res.json(portabilityHis);
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
