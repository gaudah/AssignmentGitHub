
var User = require('../../Model/customer')
// var User = require('/home/sumit/Test/ExpressJs/Model/person_info')

module.exports = (x) =>
  User
    .findOneAndUpdate(
      {
        firstName: x // search query
      },
      {
        firstName: 'Nakul' // field:values to update
      },
      {
        new: true, // return updated doc
        runValidators: true // validate before update
      })
