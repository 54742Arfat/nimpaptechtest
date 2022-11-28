// -------------express server-------//
var express = require("express");

var bodyparser = require('body-parser')

var jsonparser = bodyparser.json();

const app = express();

var cors = require('cors');
app.use(cors());



//-------mongodb atlas connection---//
const mongoose = require('mongoose')
 mongoose.connect('mongodb+srv://Arfat123:Arfat123@cluster0.iwme8fi.mongodb.net/category?retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("mongodb atlas connection establish")
}).catch((err)=>{
    console.log(err)
})                                              

var userModel = require('./model/model')

app.get("/",(req,res)=>{
        res.send("Hello this is Arfat")
})
// -------mongodb read method-----//

//-----get API---------------//

app.get("/getdata",(req,res)=>{
    userModel.find().then((mdata)=>{
        console.log(mdata)
        res.send(mdata)
    }).catch((err)=>{
        console.log(err)
    })
})



//Find data / search api

app.get('/searchData/:id', jsonparser, (req,res) => {
    // console.log( req.params.id)
    userModel.find({_id: req.params.id}).then((mdata) => {
        console.log(mdata)
        res.send(mdata)
    }).catch((err)=>{
        console.log(err)
    })
})


app.get('/catData/:name', jsonparser, (req,res) => {
    userModel.aggregate([{$match:{ctname: req.params.name}}]).then((mdata) => {
        console.log(mdata)
        res.send(mdata)
    }).catch((err)=>{
        console.log(err)
    })
})

//-----Post API---//

app.post('/addData',jsonparser,(req,res) => {
    const userdata = new userModel({
    _id: new mongoose.Types.ObjectId,
    ctid:  req.body.ctid,
   ctname: req.body.ctname,   
   prodid: req.body.prodid,
   prodname: req.body.prodname,
   prodprice:  req.body.prodprice
   
})
userdata.save().then((mdata)=>{
    console.log(mdata);
}).catch((err)=>{
    console.log(err);
})
})




// Update / Put Data

app.put('/updateData/:id',jsonparser,(req,res)=>{
    user.updateOne({_id: req.params.id},
        {
            $set:{
                ctid: req.body.ctid,
                prodid: req.body.prodid,
                prodname: req.body.prodname,
                prodprice: req.body.prodprice,
                ctname: req.body.ctname
            }
        }).then((mdata) =>{
            console.log(mdata)
        }).catch((err)=>{
            console.log(err)
        })
    
})

//-----get API---------------//

app.delete("/deletedata/:id",(req,res)=>{
    userModel.deleteOne({_id: req.params.id}).then((mdata)=>{
        console.log(mdata)
        res.send(mdata)
    }).catch((err)=>{
        console.log(err)
    })
})

app.listen(3000, () =>{
    console.log("server is listening")
})
