const express=require("express")
const router=express.Router()
const expirenceModel=require("../models/expirence")

router.get("/",async(req,res,next)=>{
    let data=await expirenceModel.find({})
    res.status(200).json({data,status:true})
})

module.exports=router;