
var Prod = require('../../Model/product.js')
module.exports = {

getTotalSoldQty:(req,res) =>
{
Prod.findOne({ "pid" : "aishu12345"}).select('total_qty sold_qty updated_at').then(i => {
        return res.send(`Booked qty is ${i.sold_qty}, Remaining qty is ${i.total_qty-i.sold_qty},Updated_At timing is ${i.updated_at}`)


      })

}
}
