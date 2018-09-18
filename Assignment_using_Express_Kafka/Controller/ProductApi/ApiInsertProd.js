
// (insertValues(req.body.firstName,req.body.lastName))
var findProdBypid = require('../../Factory/Product/findProdBypid.js')
var getApiProd = require('./ApiGetProd')
var insertValues = require('../../Factory/Product/insertProdValues')

module.exports =
{

  insertUserDetails: (req, res) => {
  // getApiProd.getByPid(req.body.pid,res)
  // console.log(req.body.pid)
    findProdBypid(req.body.pid)
      .then(doc => {
        if (doc.length == 0) {
          (insertValues(req.body))
            .then(item => {
              res.send('item saved to product database')
            })
            .catch(err => {
              res.status(400).send('unable to save to database')
            })
        }
        // res.send("Prod doesn't exist")
        else {
          res.status(400).send('duplicate product id is not allowed to enter..please enter unique product id')
          // res.send(doc);
        }
      })
      .catch(err => {
        res.send(err)
      })
  }
}
