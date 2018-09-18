var request = require("request");
var faker = require('faker')
var cnt=1111
var i
for(i=57000;i<=57007;i++)
{
request({
  uri: "http://localhost:3000/insertDetailsCust/",
  method: "POST",
  form: {
 cid: i.toString(),
 firstName: faker.name.findName(),
 lastName: faker.name.findName(),
 company: faker.name.findName(),
 connectInfo: {
 	tel: [faker.random.number()],
 	email: [faker.name.findName()],
        address: {
            city: faker.name.findName(),
            street: faker.name.findName(),
            houseNumber: faker.name.findName()
        }
    },

  product:faker.name.findName(),
  isBooked:false
  }
}, function(error, response, body) {
  console.log(body);
});
}
