var mongoose = require('mongoose')
mongoose.Promise = global.Promise
//module.exports = mongoose.connect('mongodb://localhost:27017/aishu')
module.exports = mongoose.connect('mongodb://localhost:27017/aishu',{ useNewUrlParser: true })
