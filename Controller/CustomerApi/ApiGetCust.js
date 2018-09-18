
// const validator = require('express-joi-validation')({});
// var validateFirstname = require('./Controller/validateFirstname')
var findAllUsers = require('../../Factory/Customer/findAllCustomers')
// var findUserByName = require('../../Factory/findUserByName')
var findCustBycid = require('../../Factory/Customer/findCustBycid.js')

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

  //getBycid: (req, res) => {
  getBycid: (req,res) => {

    //console.log(x)
    //findCustBycid(x)
      findCustBycid(req.params.name)
      .then(doc => {
        res.send(doc)
      })
      .catch(err => {
        res.send(err)
      })
  },

  homePage: (req, res) => {
    res.sendFile(__dirname + '/timer21.html')
  }

}
