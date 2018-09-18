var Prod = require("../../Model/product")
//var bookProd = require("../../Api/CustomerApi/bookProd.js")
var bookProd = require('../Customer/isValidCustUpdateProd.js')

module.exports = {
findAvailableProd:(req,res) => {
Prod.findOne(  
    { "total_qty": 50000,
       "sold_qty" : { $gt:0 , $lte: 50000 }},

    {pid: true},
    
    // callback function
    (err, data) => {
        if (err) return res.send("error")
        if(data && data !== 'null' && data !== 'undefined')
          bookProd.isValidCustUpdateProd(req,res)
        else
           res.send("Sorry products are not available for sale")
 

    }
);
}
}
