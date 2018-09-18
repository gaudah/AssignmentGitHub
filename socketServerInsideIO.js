// Bring in our dependencies
const express = require('express')
var path = require('path');
const app = require('express')();
const routes = require('./Routes/Routes.js');

var Prod = require('./Model/product.js')
//var redis = require("redis");

//var client = redis.createClient(); //creates a new client
//var redis = require('redis');
//var RedisStore = require('socket.io-redis');
var redis = require('socket.io-redis');


//Listen on port 3000
server = app.listen(3000)

/*var RedisStore = require('socket.io-redis')
    , pub    = redis.createClient()
    , sub    = redis.createClient()
    , client = redis.createClient();

server = app.listen(3000,{
    'store' :new RedisStore({
        redisPub : pub
        , redisSub : sub
        , redisClient : client
    }),
})

//start socket.io

var io = require('socket.io').listen(5000, {
    'store' :new RedisStore({
        redisPub : pub
        , redisSub : sub
        , redisClient : client
    }),
})*/


//socket.io instantiation
const io = require("socket.io")(server)

io.adapter(redis({ host: 'localhost', port: 6379 }));

io.on('connection', (socket) => {
    console.log('New user connected')
    app.get('/getProdDetails', (req, res) => {

        Prod.findOne({"pid": "aishu12345"}).select('total_qty sold_qty updated_at').then(i => {
            console.log("Each updated value is:=")
            console.log(`Booked qty is ${i.sold_qty}, Remaining qty is ${i.total_qty - i.sold_qty},Updated_At timing is ${i.updated_at}`)
            io.sockets.emit('new_message', {
                bookqty: `${i.sold_qty}`,
                remainingqty: `${i.total_qty - i.sold_qty}`,
                updatedat: `${i.updated_at}`
            });

        })
        res.send("Emitted")

    })
})


//  Connect all our routes to our application
app.use('/', routes);

//middlewares
app.use(express.static('public'))


//routes
app.get('/socketio', (req, res) => {
res.sendFile(path.resolve('views/saleUI17.html'))
})







