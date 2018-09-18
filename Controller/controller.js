

// Factory -> Processing or business logic

// Validations-> Endpoint validation

// Model -> Defines the database schema

var getApiProd = require('./ProductApi/ApiGetProd');

//var express = require('express')

var mongoose = require('../Validations/mongoConnection')
var getApiCust = require('./CustomerApi/ApiGetCust')

var deleteApiProd = require('./ProductApi/ApiDeleteProd')
var deleteApiCust = require('./CustomerApi/ApiDeleteCust')

var updateApiProd = require('./ProductApi/ApiUpdateProd')
var updateApiCust = require('./CustomerApi/ApiUpdateCust')

var insertApiProd = require('./ProductApi/ApiInsertProd')
var insertApiCust = require('./CustomerApi/ApiInsertCust')


//var app = express()
//var port = 3000
const validator = require('express-joi-validation')({})
var validateProdname = require('../Validations/validateProdname')
var validateProd = require('../Validations/validateProd')
var validateCust = require('../Validations/validateCust')


/*var bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
*/
//app.get('/', (req, res) => res.sendFile('/View/saleUI.html', { root : __dirname}));



var ApiGetAllUpdatedProd = require('./ProductApi/getProdDetails')
var ApibookCustProd = require('./ProductApi/checkAvailableProd')



const GetAllUpdatedProd = ApiGetAllUpdatedProd.getUpdatedProdDetails

const bookCustProd = ApibookCustProd.checkAvailableProd

const getAllProducts = getApiProd.getAllUsers

const getAllCustomers = getApiCust.getAllUsers

const getProdById = getApiProd.getByPid

/*
const getCustById = (x,req,res) => { 
console.log(x)
getApiCust.getBycid(x,req,res) 
}*/
const getCustById = getApiCust.getBycid

const deleteProd = deleteApiProd.deleteByName //delete product by title

const deleteCust = deleteApiCust.deleteByName // delete cust by firstName


const updateProd = updateApiProd.updateByUserName // update by product title
//app.put('/updateProd/:name',validator.body(validateProdname), updateApiProd.updateByUserName) // update by product title


//app.put('/updateProd/:name', updateApiProd.updateByUserName) // update by product title

const updateCust = updateApiCust.updateByUserName //update by customer firstName


//app.post('/insertDetailsProd/', insertApiProd.insertUserDetails)

/*const insertDetailsProd = (req,res) =>{
if(validator.body(validateProd))
{
insertApiProd.insertUserDetails // It's validating
}
else
{
console.log("Error in product validation")
}
}*/

const insertDetailsProd = (req,res) => {
//validator.body(validateProd)
//.then(insertApiProd.insertUserDetails)
//console.log(validator.body(validateProd))
//res.send(validator.body(validateProd))
if(validator.body(validateProd))
{
insertApiProd.insertUserDetails(req,res)
}
else
{
res.send("Sorry invalid prod")
}
}

//app.post('/insertDetailsCust/', insertApiCust.insertUserDetails)
const insertDetailsCust = (req,res) =>{ 
console.log(validator.body(validateCust))
if(validator.body(validateCust))
{
insertApiCust.insertUserDetails(req,res)
}
else
{
res.send("Sorry invalid customer details")
}
}

/*
const insertDetailsCust = (req,res) =>{ 
validator.body(validateCust)
.then(insertApiCust.insertUserDetails(req,res))
.catch(err =>{
res.send("Sorry invalid customer details")
})
}*/


module.exports = {
GetAllUpdatedProd,
bookCustProd,
getAllProducts,
getAllCustomers,
getProdById,
getCustById,
deleteProd,
deleteCust,
updateProd,
updateCust,
insertDetailsProd,
//insertDetailsProd,
insertDetailsCust
}

/*
app.listen(port, () => {
  console.log('Server listening on port ' + port)
})
*/
