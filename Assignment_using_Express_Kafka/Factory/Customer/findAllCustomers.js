/* var mongoose = require("mongoose");
var nameSchema = new mongoose.Schema({
 firstName: String,
 lastName: String
});

module.exports = mongoose.model("Person_info", nameSchema);
*/
// var User = require('/home/sumit/Test/ExpressJs/Model/person_info')

var User = require('../../Model/customer')
// module.exports = (x,y)=>(x+y)

module.exports = () => User.find({})
