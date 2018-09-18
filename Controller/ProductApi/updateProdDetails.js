
var findAndUpdateProd = require('../../Factory/Product/findAndUpdateProd.js')
module.exports = {

updateProdDetails: (req,res) => {

findAndUpdateProd.findAndUpdateProd(req,res)

 }
}
