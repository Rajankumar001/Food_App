
const express=require('express');
const {v4:uuidv4} =require('uuid');
const Order=require('../models/orderModel')
const router=express.Router();
const stripe=require('stripe')('sk_test_51Pawu4RtvSyFI9hfa3L9yhBinacqNPCIA4hRtVnsF6g61sScJ4MrBQpPDuSWfgBcnTPKgeHPWRYEW6eX7YE44yvk00lCostaZi')
router.post('/order',async(req,res)=>{
    try{
         const {token,subTotal,currentUser,Food}=req.body
// Check if token is defined and has the required properties
if (!token || !token.email || !token.id || !subTotal || !currentUser || !Food) {
   return res.status(400).send({
     success: false,
     message: "Missing required fields",
   });
 }
const customer=await stripe.customers.create({
            email:token.email,
            source:token.id
         })
         const payment=await stripe.charges.create({
            amount:subTotal*100,
            currency:'INR',
            customer:customer.id,
            // receipt_email:token.email
         },{
            idempotencyKey:uuidv4()
         })
         if(payment){
       const newOrder=new Order({
         name:currentUser.currentUser.name,
         email:currentUser.currentUser.email,
         userid:currentUser.currentUser._id,
         orderItem:Food,
         orderAmount:subTotal,
         shippingAddress:{
            street:token.card.address_line1,
            city:token.card.address_city,
            country:token.card.address_country,
            pincode:token.card.address_zip,
            payment_id:token.card.id,
            payment_holder_name:token.card.name,
            
         }
       })
      await newOrder.save();
       res.send("payment success")
         }else{
            res.send("payment fail")
         }
    }
    catch(err){
        res.status(500).send({
          success:false,
          message:"error is fetching",

        })
        console.log("error caught",err)
    }
    })
    router.post('/getUserorder',async(req,res)=>{
      const {userid}=req.body;
      console.log(userid);
      console.log(req.body);
      try{
         const orders=await Order.find({userid}).sort({_id:"-1"})
         res.status(200).send(orders);
      }
      catch(err){
         res.status(500).send({
            success:false,
            message:"Internal server error",
            err:err.stack
         })
      }
    })

module.exports=router;