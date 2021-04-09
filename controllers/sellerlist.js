let shopList=require('../models/sellerlist');
const bodyParser = require('body-parser');
const express=require('express');
const router=express.Router();

router.use(bodyParser.urlencoded({
    extended: true
}));

 exports.productinput =async(req,res,next)=>
 {  
     try{                  
               newItem =new shopList(
                   {
                    owner_name: req.body.owner_name, 
                    price:req.body.price,
                    email: req.body.email,
                    phone:req.body.phone,
                    description:req.body.description,
                    road_facing:req.body.road_facing,
                    landmark:req.body.landmark,
                    unique_id:req.body.unique_id,
                    date:new Date()                 
                   }
               );
                 newItem.save();
                 res.json(newItem);
               
        
     }
     catch(err)
     {
            console.log("asnasas",err);
            res.json(err); 
     }
 }

 exports.getproducts=async (req,res,next)=>
 {
     try{
        shopList.find().then((data)=>
     {
         res.status(200).json(data);
         data.map((data1,index)=>
         {
         console.log("data recieved")
         })       
     }).catch((err)=>
     {
         res.status(400).json("Data is not fetched")
     });
     }
     catch(err)
     {
         res.status(500).json("Some error occured unable to fetch")
     }
 }