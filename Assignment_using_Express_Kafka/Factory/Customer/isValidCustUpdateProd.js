//var updateProdDetails = require('../../Api/ProductApi/updateProdDetails.js')
var updateProdDetails = require('../Product/findAndUpdateProd.js')

var Cust = require("../../Model/customer")
module.exports = {
isValidCustUpdateProd:(req,res) =>
{
Cust.findOne(  
    // query
    {cid:req.body.cid,isBooked:true},

    {cid: true},

    // callback function
    (err, data) => {
        if (err) return res.send("error")
        if(data && data !== 'null' && data !== 'undefined')
          return res.send("isBooked is already true so can't allow same cust for sale")
        else
        {
        
Cust.findOne(  
    // query
    {cid:req.body.cid,isBooked:false},

    {cid: true},

    // callback function
    (err, data) => {
        if (err) return res.send("error")
        if(data && data !== 'null' && data !== 'undefined')
             updateProdDetails.findAndUpdateProd(req,res)
        else
          res.send("Invalid cid entered..No cid exist in database "+data)
        })
}

})
}
}







