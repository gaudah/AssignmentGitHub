

// Factory -> Processing or business logic

// Validations-> Endpoint validation

// Model -> Defines the database schema

//var getApiProd = require('./Controller/ProductApi/ApiGetProd');

//var express = require('express')

//var mongoose = require('./Validations/mongoConnection')
//var getApiCust = require('./Controller/CustomerApi/ApiGetCust')

//var deleteApiProd = require('./Controller/ProductApi/ApiDeleteProd')
//var deleteApiCust = require('./Controller/CustomerApi/ApiDeleteCust')

//var updateApiProd = require('./Controller/ProductApi/ApiUpdateProd')
//var updateApiCust = require('./Controller/CustomerApi/ApiUpdateCust')

//var insertApiProd = require('./Controller/ProductApi/ApiInsertProd')
//var insertApiCust = require('./Controller/CustomerApi/ApiInsertCust')


const routes = require('express').Router();

/*routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});*/


var bodyParser = require('body-parser')
routes.use(bodyParser.json())
routes.use(bodyParser.urlencoded({ extended: true }))
var path = require('path');
//res.sendFile(path.resolve('../View/saleUI.html'));

routes.get('/', (req, res) => res.sendFile(path.resolve('View/saleUI.html')));

//routes.get('/', (req, res) => res.sendFile('saleUI.html', { root : __dirname}));

var controller = require('../Controller/controller.js')



routes.get('/GetAllUpdatedProd',controller.GetAllUpdatedProd)

routes.post('/bookCustProd',controller.bookCustProd)

routes.get('/getAllProducts/', controller.getAllProducts)

routes.get('/getAllCustomers/', controller.getAllCustomers)

routes.get('/getProdById/:name', controller.getProdById)

routes.get('/getCustById/:name', controller.getCustById)

/*
routes.get('/getCustById/:name', (req,res) => {
console.log(req.params.name)
controller.getCustById(req.params.name,req,res)
})
*/

routes.delete('/deleteProd/:name', controller.deleteProd) //delete product by title

routes.delete('/deleteCust/:name', controller.deleteCust) // delete cust by firstName


routes.put('/updateProd/:name',controller.updateProd) // update by product title
//routes.put('/updateProd/:name',validator.body(validateProdname), updateApiProd.updateByUserName) // update by product title


//routes.put('/updateProd/:name', updateApiProd.updateByUserName) // update by product title

routes.put('/updateCust/:name',controller.updateCust) //update by customer firstName


//routes.post('/insertDetailsProd/', insertApiProd.insertUserDetails)

routes.post('/insertDetailsProd/',(req,res) => {
controller.insertDetailsProd(req,res) // It's validating
})


routes.post('/insertDetailsCust/',(req,res) => {
controller.insertDetailsCust(req,res)
})










module.exports = routes;

/*
var routes = express()
var port = 3000
//const validator = require('express-joi-validation')({})
//var validateProdname = require('./Validations/validateProdname')
//var validateProd = require('./Validations/validateProd')
//var validateCust = require('./Validations/validateCust')


var bodyParser = require('body-parser')
routes.use(bodyParser.json())
routes.use(bodyParser.urlencoded({ extended: true }))
routes.get('/', (req, res) => res.sendFile('/View/saleUI.html', { root : __dirname}));


var controller = require('./controller')


//var ApiGetAllUpdatedProd = require('./Controller/ProductApi/getProdDetails')
//var ApibookCustProd = require('./Controller/ProductApi/checkAvailableProd')


routes.get('/GetAllUpdatedProd',controller.GetAllUpdatedProd)


routes.post('/bookCustProd',controller.bookCustProd)

routes.get('/getAllProducts/', controller.getAllProducts)

routes.get('/getAllCustomers/', controller.getAllCustomers)

routes.get('/getProdById/:name', controller.getProdById)

routes.get('/getCustById/:name', controller.getCustById)


routes.delete('/deleteProd/:name', controller.deleteProd) //delete product by title

routes.delete('/deleteCust/:name', controller.deleteCust) // delete cust by firstName


routes.put('/updateProd/:name',controller.updateProd) // update by product title
//routes.put('/updateProd/:name',validator.body(validateProdname), updateApiProd.updateByUserName) // update by product title


//routes.put('/updateProd/:name', updateApiProd.updateByUserName) // update by product title

routes.put('/updateCust/:name',controller.updateCust) //update by customer firstName


//routes.post('/insertDetailsProd/', insertApiProd.insertUserDetails)

routes.post('/insertDetailsProd/',(req,res) => {
controller.insertDetailsProd(req,res) // It's validating
})

//routes.post('/insertDetailsCust/', insertApiCust.insertUserDetails)

routes.post('/insertDetailsCust/',(req,res) => {
controller.insertDetailsCust(req,res)
})


routes.listen(port, () => {
  console.log('Server listening on port ' + port)
})


*/
