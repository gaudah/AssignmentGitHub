
var User = require('../../Model/customer')

//  var User = require('/home/sumit/Test/ExpressJs/Model/person_info')

module.exports = (x) => User.find({
  cid: x, // search query
  //isBooked: false
})
