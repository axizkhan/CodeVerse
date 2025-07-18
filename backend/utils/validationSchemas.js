const Joi = require('joi');

// Chapter validation schema
const chapterSchema = Joi.object({
  name: Joi.string().required(),
  title: Joi.string().required(),
  content: Joi.string().required()
});

// Language validation schema
const languageSchema = Joi.object({
  name: Joi.string().required(),
  logo: Joi.string().allow(''),
  description: Joi.string().allow(''),
  trend: Joi.number().integer().min(0),
  topics: Joi.array().items(Joi.string().hex().length(24))
});

// Membership validation schema
const membershipSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().required(),
  perks: Joi.array().items(Joi.string()).required(),
  description: Joi.string().allow(''),
  termsAndConditions: Joi.string().allow(''),
  cancellationPolicy: Joi.string().allow('')
});

// Order validation schema
const orderSchema = Joi.object({
  userId: Joi.string().hex().length(24).required(),
  membershipId: Joi.string().hex().length(24).required()
});

// User validation schema (for signup)
const userSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

module.exports = {
  chapterSchema,
  languageSchema,
  membershipSchema,
  orderSchema,
  userSchema
};