
// (insertValues(req.body.firstName,req.body.lastName))

var express = require('express')

var app = express()

var insertValues = require('../../Factory/Customer/insertCustValues')

var findCustBycid = require('../../Factory/Customer/findCustBycid.js')
var getApiCust = require('./ApiGetCust')
var insertValues = require('../../Factory/Customer/insertCustValues')

module.exports =
{
  insertUserDetails: (req, res) => {
  // getApiProd.getByPid(req.body.pid,res)
    //console.log(req.body)
    findCustBycid(req.body.cid)
      .then(doc => {
        //console.log("Cust id is ="+doc)
        //res.send(doc)
        if (doc.length == 0) {
	    //res.send("success"+doc)
          (insertValues(req.body))
            .then(item => {
              res.sendFile(__dirname + '/timer21.html')
            })
            .catch(err => {
              res.status(400).send('unable to save to database')
            })
        }
        // res.send("Prod doesn't exist")
        else {
          res.status(400).send('duplicate customer id is not allowed to enter..please enter unique customer id')
          // res.send(doc);
        }
      })
      .catch(err => {
        res.send(err)
      })
  }
}

/*
module.exports =
{

  insertUserDetails: (req, res) => {
   (insertValues(req.body))
   .then(item => {
     res.send("item saved to customer database");
   })
   .catch(err => {
       res.status(400).send("unable to save to database");

   })
 }
}
*/
