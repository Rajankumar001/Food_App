const express=require('express');
const food =require('../models/FoodSchema');
const router=express.Router();

router.get('/getAllFood', async(req,res)=>{
    try{
    const result=await food.find({});
    res.status(201).send({
        sucess:true,
        message:"food data is recieving perfectly....",
        result
    })
    console.log(result);
    }catch(err){
        console.log("error caught..... ",err)
    }
})



module.exports=router;