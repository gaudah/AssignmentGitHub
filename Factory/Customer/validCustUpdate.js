var Cust = require("../../Model/customer")
//var getProdDetails = require('../../Api/ProductApi/getProdDetails.js')
var getProdDetails = require('../Product/getTotalSoldQty.js')

module.exports = {

validCustUpdate:(req,res) =>{
Cust.update( {$and:[{"cid":req.body.cid},{"isBooked":false}]},{ $set: { isBooked: true }}, function (err, user) {
  if (err) {
     return res.send("error")
  }
  console.log("......................................")
  console.log("cid="+req.body.cid,new Date().getTime())

    getProdDetails.getTotalSoldQty(req,res)
    
})

}
}
