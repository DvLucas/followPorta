const Joi = require ('joi');

const id = Joi.string().uuid();
//const name = Joi.string().alphanum().min(3).max(15);
const number = Joi.string().alphanum().length(10);
//const alternativeNumber = Joi.number().integer().min(10).max(10);
const dni =  Joi.number().integer().min(7);
//const created_at = Joi.date();
//const modified_at = Joi.date();
const state = Joi.number().integer();
const description = Joi.string();
const pin = Joi.string().alphanum().length(4);
const expirationPin = Joi.date();
const userId = Joi.string().uuid();


const createPortabilitySchema = Joi.object({
  number: number.required(),
  dni: dni.required(),
  state: state.required(),
  description: description,
  userId: userId.required()
});

const updatePortabilitySchema = Joi.object({
  number: number,
  dni: dni,
  state: state,
  description: description,
  pin: pin,
  expirationPin: expirationPin,
});

const getPortabilitySchema = Joi.object({
  id: id.required(),
});

module.exports = { createPortabilitySchema, updatePortabilitySchema, getPortabilitySchema }
