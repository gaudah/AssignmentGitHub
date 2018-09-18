
const Joi = require('joi')
module.exports = Joi.object({
  pid: Joi.string().min(2).max(50).optional(),
  title: Joi.string().min(2).max(50).required(),
  ptype: Joi.string().optional(),
  price: Joi.number().integer().optional(),
  prod_desc_attributes: Joi.any().optional()

// lastName: Joi.string().optional()
  // country: Joi.string().valid(Object.keys(require('country-codes')).required(),
  // ag: Joi.number().integer().positive().max(150).required()
})
