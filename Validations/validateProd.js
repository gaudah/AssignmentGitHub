
const Joi = require('joi')
module.exports = Joi.object({
  pid: Joi.string().min(2).max(50).required(),
  title: Joi.string().min(2).max(50).required(),
  ptype: Joi.string().required(),
  price: Joi.number().integer().required(),
  prod_desc_attributes: Joi.any().required(),
  total_qty:Joi.number().integer().required(),
  sold_qty:Joi.number().integer().required()
// lastName: Joi.string().required()
  // country: Joi.string().valid(Object.keys(require('country-codes')).required(),
  // ag: Joi.number().integer().positive().max(150).required()
})
