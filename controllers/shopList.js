let shopList=require('../models/shopList');
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
                    product_name: req.body.product_name, 
                    total_bought:req.body.total_bought,
                    rating: req.body.rating,
                    desciption:req.body.desciption,
                    image_url:req.body.image_url,
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

//  exports.deleteproduct =async (req,res,next)=>
//  {   try
//     {
//     await shopList.findById(req.params.id).then((data)=>
//      {
//          if(data)
//         { data.delete((data)=>
//          {
//              res.status(201).json("deleted successfully");
//          })
//         }
//         else {
//             res.status(300).json("this id does not matched")
//         }
//      })
//      .catch((err)=>
//      {
//          res.status(500).json("hello error")
//          console.log("error happened",err);
//      })   
//     }
//    catch(err)
//    {
//        console.log("error ho gai",err);
//        res.status(500).json("error occured");
//    }
//  }
 
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