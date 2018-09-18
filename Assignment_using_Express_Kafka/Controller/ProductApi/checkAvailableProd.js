
var findAvailableProd= require('../../Factory/Product/findAvailableProd.js')
module.exports = {
checkAvailableProd:(req,res) =>
{
  findAvailableProd.findAvailableProd(req,res)
}
}
