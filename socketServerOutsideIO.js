// Bring in our dependencies
const express = require('express')
var path = require('path');
const app = require('express')();
const routes = require('./Routes/Routes.js');

var redis = require('socket.io-redis');

//Listen on port 3000
server = app.listen(3000)

//socket.io instantiation
const io = require("socket.io")(server)

io.adapter(redis({ host: 'localhost', port: 6379 }));

const prodroute = require('./Routes/prodRoute.js')



app.set('socketIO', io);

//  Connect all our routes to our application
app.use('/', routes);
app.use('/', prodroute);

//middlewares
app.use(express.static('public'))


//routes
app.get('/socketio', (req, res) => {
    res.sendFile(path.resolve('views/saleUI17.html'))
})








