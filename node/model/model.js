var mongoose = require('mongoose')

var usermodel = new mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   ctid: String,
   ctname: String,    
   prodid: String ,
   prodname: String,
   prodprice: String
   
})

module.exports = mongoose.model("categories",usermodel)