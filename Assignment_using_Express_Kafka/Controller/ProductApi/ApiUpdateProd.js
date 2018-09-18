
var updateUserByName = require('../../Factory/Product/updateProdByName.js')

module.exports = {
  	updateByUserName: (req, res) => {
	console.log(req.params.name)
      updateUserByName(req.params.name)
      .then(doc => {
        res.send({data: 'Record has been updated..!!'})
      })
      .catch(err => {
        res.send(err)
      })
  }
}
