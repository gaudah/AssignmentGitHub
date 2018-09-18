
// var User = require('/home/sumit/Test/ExpressJs/Model/person_info')

var User = require('../../Model/customer')

// var User = require('../Model/product')

module.exports = (x) => {
  var myData = new User(x)

  // let UserModel = require('./user_new')
  /* var msg = new User({
  firstName: x,
  lastName: y,
}) */

  return myData.save()
}

// return myData.save()

// console.log("myData")
// console.log(myData)
/// //////////////myData.save()

/*

var User = require('../Model/person_info')

module.exports = (x,y) =>
{

var myData = new User({x,y});

//let UserModel = require('./user_new')
var msg = new User({
  firstName: x,
  lastName: y,
})

return msg.save()
}
*/
