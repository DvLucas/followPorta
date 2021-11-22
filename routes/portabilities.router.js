const express = require('express');
const PortabilitiesService = require('../services/portability.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createPortabilitySchema, updatePortabilitySchema, getPortabilitySchema } = require('../schemas/portability.schema');

const router = express.Router();
const service = new PortabilitiesService();

router.get('/' ,async (req, res) => {
  const portabilities = await service.find();
  res.json(portabilities);
});

router.get('/:id',
  validatorHandler(getPortabilitySchema, 'params'),
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
  validatorHandler(createPortabilitySchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newPortability = await service.create(body);
    res.status(201).json(newPortability);
});

router.patch('/:id',
  validatorHandler(getPortabilitySchema, 'params'),
  validatorHandler(updatePortabilitySchema, 'body'),
  async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const portability = await service.update(id, body);
    res.json(portability);
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
