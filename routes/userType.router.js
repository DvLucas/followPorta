const express = require('express');
const UserTypeService = require('../services/userType.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createUserTypeSchema, getUserTypeSchema, updateUserTypeSchema } = require('../schemas/userType.schema');

const router = express.Router();
const service = new UserTypeService();

router.get('/' ,
  async (req, res, next) => {
    try {
      const userType = await service.find();
      res.json(userType);
    } catch (error) {
      next(error);
    }
});

router.get('/:id' ,
  validatorHandler(getUserTypeSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const userType = await service.findOne(id);
      res.json(userType);
    } catch (error) {
      next(error);
    }
});

router.post('/',
  validatorHandler(createUserTypeSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const newUserType = await service.create(body);
      res.status(201).json(newUserType);
    } catch (error) {
      next(error)
    }
});

router.patch('/:id',
  validatorHandler(updateUserTypeSchema, 'body'),
  async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const userType = await service.update(id, body);
      res.json(userType);
    } catch (error) {
      res.status(404).json({
        message: error.message
      });
    }
});

router.delete('/:id',
  validatorHandler(getUserTypeSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const rta = await service.delete(id);
      res.json(rta);
    } catch (error) {
        next(error);
    }
});

module.exports = router;
