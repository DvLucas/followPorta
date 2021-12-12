const Joi = require ('joi');

const id = Joi.number().integer();
//const name = Joi.string().alphanum().min(3).max(15);
const number = Joi.string().alphanum().length(10);
//const alternativeNumber = Joi.number().integer().min(10).max(10);
const dni =  Joi.string();
//const created_at = Joi.date();
//const modified_at = Joi.date();
const stateId = Joi.number().integer();
const description = Joi.string();
const pin = Joi.string().alphanum().length(4);
const expirationPin = Joi.date();
const userId = Joi.number().integer();


const createPortabilitySchema = Joi.object({
  number: number.required(),
  dni: dni.required(),
  stateId: stateId.required(),
  description: description,
  userId: userId.required()
});

const updatePortabilitySchema = Joi.object({
  number: number,
  dni: dni,
  stateId: stateId,
  description: description,
  pin: pin,
  expirationPin: expirationPin,
});

const getPortabilitySchema = Joi.object({
  id: id.required(),
});

module.exports = { createPortabilitySchema, updatePortabilitySchema, getPortabilitySchema }
