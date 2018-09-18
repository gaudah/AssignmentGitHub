
//  var User = require('/home/sumit/Test/ExpressJs/Model/person_info')

var User = require('../../Model/product')
module.exports = (x) => User.remove({ title: x })
