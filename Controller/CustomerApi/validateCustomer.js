
var validCustUpdate = require('../../Factory/Customer/validCustUpdate.js')
module.exports = {
validateCustomer:(req,res) =>
{
  validCustUpdate.validCustUpdate(req,res)
}
}
