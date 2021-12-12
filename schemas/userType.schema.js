const Joi = require ('joi');

const id = Joi.number().integer();
const permissions = Joi.string();

const createUserTypeSchema = Joi.object({
  permissions: permissions.required(),
});

const getUserTypeSchema = Joi.object({
  id: id.required(),
});

const updateUserTypeSchema = Joi.object({
  permissions: permissions.required(),
});

module.exports = { createUserTypeSchema, getUserTypeSchema, updateUserTypeSchema };
