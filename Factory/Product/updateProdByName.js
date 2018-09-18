
var User = require('../../Model/product')
// var User = require('/home/sumit/Test/ExpressJs/Model/person_info')

module.exports = (x) => {
  return User
    .findOneAndUpdate(
      {
        title: x // search query
      },
      {
        title: 'Laptop' // field:values to update
      },
      {
        new: true, // return updated doc
        runValidators: true // validate before update
      })

}
