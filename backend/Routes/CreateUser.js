const express=require("express")
const router=express.Router();
const User=require("../models/User")

router.post("/createuser",async(req,res) =>{
try{
    User.create({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
        location:req.body.location
    })
    res.send({sucess: true})
}
catch(err){
console.log(err)
res.send({sucess: false})
}
})

module.exports=router





