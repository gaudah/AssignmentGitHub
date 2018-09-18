var Prod = require("../../Model/product")
//var validateCustomer = require('../../Api/CustomerApi/validateCustomer.js')
var validCustUpdate = require('../../Factory/Customer/validCustUpdate.js')
module.exports = {

findAndUpdateProd:(req,res) => {
Prod.findOne({ "pid": req.body.pid}).select('sold_qty').then(i => {
if(i!==null)
{
Prod
  .findOneAndUpdate(
    {
      "total_qty": 50000, // search query
       "sold_qty" : { $gt:0 , $lte: 50000 }

    }, 
    {
      $set : { "sold_qty" : i.sold_qty+1 }
        
    },
    {
      new: true,                       // return updated doc
      runValidators: true              // validate before update
    })
  .then(doc => {

    console.log("in prod update=",req.body.cid,doc)
    validCustUpdate.validCustUpdate(req,res)

  })
  .catch(err => {
    res.send(err)
})
}

else
{
  res.status(400).send('prod is invalid')
}     

})
}
}
