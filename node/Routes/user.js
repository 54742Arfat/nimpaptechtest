const express = require('express');

const router = express.Router();


router.get("/getdata",(req,res)=>{
    console.log('Hi Ubed')
    res.send("get user data")
})

router.post("/adddata",(req,res)=>{
    res.send("get user data")
})

router.put("/update",(req,res)=>{
    res.send("get user data")
})

router.delete("/delete",(req,res)=>{
    res.send("get user data")
})

module.exports = router;
