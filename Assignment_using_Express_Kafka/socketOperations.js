// Bring in our dependencies
const express = require('express')
var path = require('path');
const JSON = require('circular-json');
const app = require('express')();
const routes = require('./Routes/Routes.js');

var Prod = require('./Model/product.js')

//Listen on port 3000
server = app.listen(3000)

//socket.io instantiation
const io = require("socket.io")(server);


var roomno = 1;
clients17 = []
var clients = [];
io.on('connection', (socket) => {
    console.log( 'New User ' + socket.id + ' connected' );
    console.log(io.nsps['/'].adapter.rooms["room-"+roomno])
    socket.join('some_room'); //Room is created when the socket joins it
    //Increase roomno if the number of connctions are more than 2
    if(io.nsps['/'].adapter.rooms["room-"+roomno] && io.nsps['/'].adapter.rooms["room-"+roomno].length > 1) roomno++;
    socket.join("room-"+roomno);
    socket.join('some1') //To chain the rooms we should join the rooms firstly
    socket.join('some2')
    
    //console.log(socketobj)
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
        //You can use to or in for emitting a message in a room
        // now, it's easy to send a message to just the clients in a given room
        io.to('some_room').emit('some_event',{msg:"thank you"});
        //io.to('some_room2').emit('some_event',{msg:"welcome to NAD"});
        io.sockets.in( 'some1' ).to( 'some2' ).emit( 'chainRoom', "WELCOME TO NAD", socket.id );
        socket.broadcast.emit( 'greetings', 'Hello from the server!', socket.id ); // send the event to everyone in the namespace/room except for yourself
        //socket.emit( 'greetings', 'Hello from the server!', socket.id ); //It will print socket id to only one socket
        io.of( '/' ).emit( 'heyEveryone',{msg:"hello everyone"}, socket.id ); // of( '/' ) is how we reference a namespace, in this case the main "/" one
        //io.of( '/socketio' ).emit( 'heyEveryone',{msg:"hello everyone"}, socket.id ); // of( '/' ) is how we reference a namespace, in this case the main "/" one
        // this message will NOT go to the client defined above because room is different even if event name is same and it is not defined in client side
        io.to('some_room1').emit('some_event',{msg:"welcome to NAD"});
        //Send this event to everyone in the room.
        io.sockets.in("room-"+roomno).emit('connectToRoom',{msg1:"You are in room no. "+roomno});
        socket.leave("room-"+"1");
        socket.leave("room-"+"2");
        socket.leave("room-"+"3");
        socket.leave("room-"+"4");
        socket.leave("room-"+"5");
        socket.leave("room-"+"6");

        clients.push(socket.id);

        console.log("connected clients are"+clients)
        var otherSocket = io.sockets.connected[clients[0]]; // NOTE: sockets is the default "/" namespace
        console.log("OTHER CLIENT IS:="+clients[0])
        if( otherSocket )
            io.sockets.connected[clients[0]].emit("greetings17", "Howdy, User 1!");
        console.log("connected clients are"+clients)
        //This will send msg to only newly conncted client
        for(var i=0 ;i<(clients.length-1); i++)
        {
            console.log("Each client is:"+clients[i])
            //io.sockets.connected[clients[i]].emit("greetings17", `Howdy, User ${i} your socket id is:=${clients[i]}`);
        }


        // var clients1 = io.sockets.clients();
        var clients1 = io.of('/').clients();
        //var clients2 = io.sockets.clients('some_room'); // all users from room `room`

       // console.log("ALl the coonected cliesnts are  "+JSON.stringify(clients1))
        console.log(">>>>>>>>>>>>>>>>>>ALl the coonected cliesnts are  "+Object.keys(io.sockets.sockets))
        //clients17.push(Object.keys(io.sockets.sockets).toString().split(","))
        console.log("Number of connected clients are "+Object.keys(io.sockets.sockets).toString().split(",").length)
        console.log(Object.keys(io.sockets.sockets).toString().split(",").length)
        var store = Object.keys(io.sockets.sockets).toString().split(",")
        //This will send different messages to all the clients.
        //Using this we can send the msg to specific client which we want
        for(var i=0 ;i<store.length; i++)
        {
            console.log("Each client is:"+store[i])
            io.sockets.connected[store[i]].emit("greetings17", `Howdy, User ${i} your socket id is:=${store[i]}`);
        }

         //Get all the clients of a specific room
        var result = get_clients_by_room('some_room', '/')
        console.log("result is "+result)


        socket.on('disconnect', function() {
            console.log(socket.id + ' disconnected');
            //remove user from db
        })

    })
})



//  Connect all our routes to our application
app.use('/', routes);


//middlewares
app.use(express.static('public'))


//routes
app.get('/socketio', (req, res) => {
    res.sendFile(path.resolve('views/saleUI.html'))
})









