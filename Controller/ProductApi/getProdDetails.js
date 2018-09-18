
var getTotalSoldQty = require('../../Factory/Product/getTotalSoldQty.js')
module.exports = {

getUpdatedProdDetails: (req,res) =>
{
	getTotalSoldQty.getTotalSoldQty(req,res)
}
}
