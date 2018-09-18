var mongoose = require('mongoose')
Schema = mongoose.Schema
var prod = require('./product')

var CustomerSchema = new Schema({
  cid: {type: String, required: true},
  firstName: String,
  lastName: String,
  company: String,
  connectInfo: {
    tel: [Number],
    email: [String],
    address: {
      city: String,
      street: String,
      houseNumber: String
    }
  },
  /// / One to many relationship
  product: {type: String, ref: prod},
  isBooked:{type:Boolean, default:false}
})

/*
var productSchema = new mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId
    title:{type:String,required}, // Common Attributes
    ptype:{type:String,required},
    price:{type:Number,required}, // Common Attributes
    images:[buffer], // Common Attributes
    //Other Common Attributes goes here
    prod_desc_attributes:{} // Empty attributes object which can vary for each product.
});
*/
// var Product = mongoose.model('Product', productSchema);

CustomerSchema.methods.validPassword = function( pwd ) {
    // EXAMPLE CODE!
    //return ( this.firstName === pwd );
    return ( this.cid === pwd );
};


module.exports = mongoose.model('Customer', CustomerSchema)
