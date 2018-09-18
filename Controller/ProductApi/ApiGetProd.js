
// const validator = require('express-joi-validation')({});
// var validateFirstname = require('./Controller/validateFirstname')
var findAllUsers = require('../../Factory/Product/findAllProducts.js')
var findProdBypid = require('../../Factory/Product/findProdBypid.js')

module.exports = {
  getAllUsers: (req, res) => {
    findAllUsers()
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.send(err)
      })
  },

  getUserById: (req, res) => {
    res.send('user id is ' + req.params.id)
  },

  getQueryPara: (req, res) => {
    const query = req.query// query = {gender:"female"}

    const params = req.params // params = {id:"11111"}
    res.send(query)
  },

  getByPid: (req, res) => {
    findProdBypid(req.params.name)
      .then(doc => {
        res.send(doc)
      })
      .catch(err => {
        res.send(err)
      })
  },

  homePage: (req, res) => {
    res.sendFile(__dirname + '/takeInput.html')
  }

}
