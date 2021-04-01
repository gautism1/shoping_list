const mongoose=require('mongoose')
const adminschema= new mongoose.Schema(
    {
        product_name:String,
        total_reviews:String,        
        total_bought:Number,
        rating:Number,
        desciption:String,
        image_url:String,
        price:Number,
        category:String,
        sku:String,
        date:{
              type:Date,
              default:Date.now
         }
    }
);
module.exports=mongoose.model('admin',adminschema)
 