let shopList=require('../models/shopList');
const bodyParser = require('body-parser');
const express=require('express');
const router=express.Router();

router.use(bodyParser.urlencoded({
    extended: true
}));

 exports.productinput =async(req,res,next)=>
 {  
     try{            console.log(req.body)        
               newItem =new shopList(
                   {
                    product_name: req.body.product_name, 
                    total_bought:req.body.total_bought,
                    rating: req.body.rating,
                    desciption:req.body.desciption,
                    image_url:req.body.imageurl,
                    price:req.body.price,
                    category:req.body.category,
                    sku:req.body.sku,
                    total_reviews:req.body.total_reviews,
                    date:new Date()                 
                   }
               );
                 newItem.save();
                 res.json(newItem);
                 console.log("successfully done",newItem)
        
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