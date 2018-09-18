
var request = require("request");
var express = require('express');
var app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

var result=[]
var kafka = require('kafka-node'),
    Consumer = kafka.Consumer,
    client = new kafka.Client(),
    consumer = new Consumer(client,
        [{ topic: 'cidpid', offset: 0}],
        {
            autoCommit: false
        }
    );
consumer.on('message', function (message) {
    console.log(message);
    result.push(message.value)
});

console.log("success")
console.log(result)

consumer.on('error', function (err) {
    console.log('Error:',err);
})

consumer.on('offsetOutOfRange', function (err) {
    console.log('offsetOutOfRange:',err);
})



app.get('/consumePayload',(req,res) => {
 var store = ({result})
 res.send(store)

});


var allRequests=[]
app.get('/handleRequest',(req,res) => {

console.log("Only result")
console.log(result)

var temp = result
console.log(temp)
var i

for(i=0; i<(temp.length); i=i+2)
{
console.log("temp values are")
console.log(temp[i])
console.log(temp[i+1])
request({
  uri: "http://localhost:3000/bookCustProd",
  method: "POST",
  form: {

    pid: temp[i],
    cid: temp[i+1]


  }
}, function(error, response, body) {
  console.log(body);
  allRequests.push(body)
  //res.send(body)
});
}
 res.send("Requests handled successfully")
 //res.send(allRequests)

});

app.get('/getAllRequests', (req,res) => {
 res.send(allRequests)
})




app.listen(3002,function(){
    console.log('Kafka producer running at 3002')
})
