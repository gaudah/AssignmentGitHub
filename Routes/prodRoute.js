const routes = require('express').Router();

var Prod = require('../Model/product.js')

//var io = routes.get('socketIO');

//module.exports = function(io) {
   // console.log("came")
//io.on('connection', (socket) => {
    routes.get('/getProdDetails', (req, res) => {
        var io = req.app.get('socketIO');
        //var io = req.server.get('socketIO');
        io.emit('hi!');

        Prod.findOne({"pid": "aishu12345"}).select('total_qty sold_qty updated_at').then(i => {
            console.log("Each updated value is:=")
            console.log(`Booked qty is ${i.sold_qty}, Remaining qty is ${i.total_qty - i.sold_qty},Updated_At timing is ${i.updated_at}`)
            io.sockets.emit('new_message', {
                bookqty: `${i.sold_qty}`,
                remainingqty: `${i.total_qty - i.sold_qty}`,
                updatedat: `${i.updated_at}`
            });

          res.send(`Booked qty is ${i.sold_qty}, Remaining qty is ${i.total_qty - i.sold_qty},Updated_At timing is ${i.updated_at}`)
        })
        //res.send("Emitted")
    })
//})
//module.exports ={ routes , prodDetails }
module.exports = routes

