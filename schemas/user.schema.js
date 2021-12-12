const Joi = require ('joi');

const id = Joi.number().integer();
const email = Joi.string().email();
const password = Joi.string();
const first_name = Joi.string();
const last_name = Joi.string();
const supervisorId = Joi.number().integer();
const role = Joi.string();
const userTypeId = Joi.number().integer();

const createUserSchema = Joi.object({
  email: email.required(),
  password: password.required(),
  first_name: first_name,
  last_name: last_name,
  supervisorId: supervisorId,
  userTypeId: userTypeId.required(),
});

const getUserSchema = Joi.object({
  id: id.required(),
});

const updateUserSchema = Joi.object({
  email: email,
  password: password,
  first_name: first_name,
  last_name: last_name,
  supervisorId: supervisorId,
});

module.exports = { createUserSchema, getUserSchema, updateUserSchema };
