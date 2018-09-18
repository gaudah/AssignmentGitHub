var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ProductSchema = new Schema({
  pid: {type: String, required: true},
  title: {type: String, required: true}, // Common Attributes
  ptype: {type: String, required: true},
  price: {type: Number, required: true}, // Common Attributes
  images: [Buffer], // Common Attributes
  // Other Common Attributes goes here
  prod_desc_attributes: {}, // Empty attributes object which can vary for each product.
  total_qty: {type:Number,required: true},
  sold_qty:{type:Number,required: true},
  created_at: { type: Date, default: Date.now },
  updated_at: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Product', ProductSchema)
