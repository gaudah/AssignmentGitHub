var isValidCustUpdateProd = require('../../Factory/Customer/isValidCustUpdateProd.js')
module.exports = {

bookProd:(req,res) =>
{
isValidCustUpdateProd.isValidCustUpdateProd(req,res)
}
}
