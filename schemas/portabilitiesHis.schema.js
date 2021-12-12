const Joi = require ('joi');

const id = Joi.number().integer();
const description = Joi.string();
const portabilityId = Joi.number().integer();

const createPortabilityHisSchema = Joi.object({
  description: description.required(),
  portabilityId: portabilityId.required(),
});

const getPortabilityHisSchema = Joi.object({
  id: id.required(),
});

const updatePortabilityHisSchema = Joi.object({
  description: description.required(),
});

module.exports = { createPortabilityHisSchema, getPortabilityHisSchema, updatePortabilityHisSchema };
