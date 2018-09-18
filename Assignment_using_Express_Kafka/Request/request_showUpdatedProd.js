var request = require("request");
var faker = require('faker')

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}


setInterval(function() {
var custId = (parseInt(getRndInteger(14090,15090))).toString()
var prodId = "aishu12345"
request({
  uri: "http://localhost:3000/getProdDetails",
  method: "GET",
  /*form: {
  pid: prodId,
  cid: custId
 }*/
}, function(error, response, body) {
  console.log(body);
});
}, 10);
//}

