const shopList=require('../models/sellerlist');

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
                    owner_name: req.body.details.owner_name, 
                    price:req.body.details.price,
                    email: req.body.details.email,
                    phone:req.body.details.phone,
                    description:req.body.details.description,
                    road_facing:req.body.details.road_facing,
                    landmark:req.body.details.landmark,
                    unique_id:req.body.details.unique_id,
                    coordinates:
                    {   longitude:req.body.coordinates.longitude,
                        latitude:req.body.coordinates.latitude},
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