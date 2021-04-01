let quotes=require('../models/quotes');
const bodyParser = require('body-parser');
const express=require('express');
const router=express.Router();

router.use(bodyParser.urlencoded({
    extended: true
}));

 exports.quotesinput =async(req,res,next)=>
 {  
     try{
         if(req.body.product_name && req.body.admin_id && req.body.price )
         {
            if(req.body.admin_id=="admin123")
            {                        
               newquote =new quotes(
                   {
                    product_name: req.body.product_name,
                    total_bought:req.body.total_bought,
                    rating: req.body.rating,
                    desciption:req.body.desciption,
                    image_url:req.body.image_url,
                    price:req.body.price,
                    category:req.body.category,
                    sku:req.body.sku,
                    date:Date.now
                     
                   }
               );
                 newquote.save();
                 res.json(newquote);
                 console.log("successfully done",newquote)
            }
            else
            {           
                 res.json("wrong passkey lease use valid key")
            }
         }
         else
         {     
             res.status(401).json("Something  is  missing please input all required inputs")
         }
     }
     catch(err)
     {
            console.log("asnasas",err);
           res.json(err);
       
     }
 }

 exports.deletequote =async (req,res,next)=>
 {   try
    {
    await quotes.findById(req.params.id).then((data)=>
     {
         if(data)
        { data.delete((data)=>
         {
             res.status(201).json("deleted successfully");
         })
        }
        else {
            res.status(300).json("this id does not matched")
        }
     })
     .catch((err)=>
     {
         res.status(500).json("hello error")
         console.log("error happened",err);
     })   
    }
   catch(err)
   {
       console.log("error ho gai",err);
       res.status(500).json("error occured");
   }
 }
 
 exports.getquote=async (req,res,next)=>
 {
     try{

     quotes.find().then((data)=>
     {
         res.status(200).json(data);
         data.map((data1,index)=>
         {
            // let days=Math.trunc(((new Date())-data1.date)/(60*60*24*365));
        console.log("quotes",data1);
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