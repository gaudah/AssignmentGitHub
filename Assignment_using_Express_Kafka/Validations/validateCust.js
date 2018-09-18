
const Joi = require('joi')
module.exports = Joi.object({
  cid: Joi.string().min(2).max(50).required(),
  firstName: Joi.string().min(2).max(50).required(),
  lastName: Joi.string().required(),
  company: Joi.string().required(),
  connectInfo: Joi.any().required(),
  product:Joi.string().required(),
  isBooked:Joi.boolean().required()
// lastName: Joi.string().required()
  // country: Joi.string().valid(Object.keys(require('country-codes')).required(),
  // ag: Joi.number().integer().positive().max(150).required()
})
