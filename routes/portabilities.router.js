const express = require('express');
const PortabilitiesService = require('../services/portability.service');

const router = express.Router();
const service = new PortabilitiesService();

router.get('/' ,async (req, res) => {
  const portabilities = await service.find();
  res.json(portabilities);
});

router.get('/:id' ,async (req, res) => {
  const { id } = req.params;
  const portability =await service.findOne(id);

  res.json(portability);
});

router.post('/',async (req, res) => {
  const body = req.body;
  const newPortability = await service.create(body);
  res.status(201).json(newPortability);
});

router.patch('/:id',async (req, res) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const portability = await service.update(id, body);
    res.json(portability);
  } catch (error) {
    res.status(404).json({
      message: error.message
    });
  }
});

router.delete('/:id',async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});


module.exports = router;
