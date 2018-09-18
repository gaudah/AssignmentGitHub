//https://www.linkedin.com/pulse/introduction-kafka-using-nodejs-pankaj-panigrahi/
//We have to send cid,pid instead of message using producer and that cid,pid get consumed by /bookCustProd api to book the product

var faker = require('faker')
var express = require('express');
var kafka = require('kafka-node');
var app = express();

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

var Producer = kafka.Producer,
    client = new kafka.Client(),
    producer = new Producer(client);

producer.on('ready', function () {
    console.log('Producer is ready');
});

producer.on('error', function (err) {
    console.log('Producer is in error state');
    console.log(err);
})

app.get('/',function(req,res){
    res.json({greeting:'Kafka Producer'})
});

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}



app.post('/sendPayload',function(req,res){
    //var custId = (req.body.cid);
    //var prodId = (req.body.pid);
    var custId = (parseInt(getRndInteger(14090,15050))).toString()
      //var custId = (process.argv[2])
      //var custId =faker.random.number()
      //var custId = faker.name.findName()
      var prodId = "aishu12345"

      console.log(prodId)
      console.log(custId)


    payloads = [
        //{ topic: req.body.topic,  messages: [custId,prodId] , partition: 0 }
          { topic: "cidpid",  messages: [prodId,custId] , partition: 0 }

    ];
    producer.send(payloads, function (err, data) {
            res.json(data);
    });
    
})


app.listen(3001,function(){
    console.log('Kafka producer running at 3001')
})
