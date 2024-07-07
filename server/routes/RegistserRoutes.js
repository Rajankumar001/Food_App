const express=require('express');
const RegisterModel=require('../models/RegisterSchema');
const routes=express.Router();

routes.post('/Register',async(req,res)=>{
  try{
        const {name,email,password,address}=req.body;
        const register=new RegisterModel({
            name,
            email,
            password,
            address
        })
        const data= await register.save();
        res.status(201).send({
            success:true,
            message:"user registeration succesful..."
        })
  }
  catch(err){
    console.log('error caught....',err)
  }
})


module.exports=routes;