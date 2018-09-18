
var deleteUserByName = require('../../Factory/Customer/DeleteCustByName')

module.exports = {
  deleteByName: (req, res) => {
    deleteUserByName(req.params.name)
      .then(data => {
        res.send({data: 'Record has been Deleted..!!'})
      })
      .catch(err => {
        res.send(err)
      })
  }
}
