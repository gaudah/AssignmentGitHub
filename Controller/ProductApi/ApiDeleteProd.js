
//var deleteUserByName = require('../../Factory/Product/findAllProducts')

var deleteUserByName = require('../../Factory/Product/DeleteProdByName.js')
//var deleteUserByName = require('../../Factory/Product/findProdBypid.js')

//console.log(deleteUserByName("aAA1234"))

module.exports = {
  deleteByName: (req, res) => {
    //console.log(req.params.name)
    deleteUserByName(req.params.name)
      .then(data => {
        res.send({data: 'Record has been Deleted..!!'})
      })
      .catch(err => {
        res.send(err)
      })
  }
}
