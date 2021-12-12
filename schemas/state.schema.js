const Joi = require ('joi');

const id = Joi.number().integer();
const description = Joi.string();

const createStateSchema = Joi.object({
  description: description.required(),
});

const getStateSchema = Joi.object({
  id: id.required(),
});

const updateStateSchema = Joi.object({
  description: description.required(),
});

module.exports = { createStateSchema, getStateSchema, updateStateSchema };
