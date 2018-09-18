
var User = require('../../Model/product')

//  var User = require('/home/sumit/Test/ExpressJs/Model/person_info')

module.exports = (x) => User.find({
  pid: x // search query
})
