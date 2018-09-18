
//  var User = require('/home/sumit/Test/ExpressJs/Model/person_info')

var User = require('../../Model/customer')
module.exports = (x) => User.remove({ firstName: x })
