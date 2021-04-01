const express = require('express');
const ejs=     require('ejs');
const multer =require('multer');
const path=require('path');
const { getFips } = require('crypto');

const app=express();

const storage =multer.diskStorage(
    {
        destination :'./public/uploads/',
        flename :function(req,file,cb){
            cb(null,file.fielname+' '+ Date.now()+ " " + path.extname(file.originalname));
        }
    }

)

const upload = multer(
    {
     storage:storage,
     
     fileFilter:function(req,file,cb)
     {
         checkFilter(file,cb);

     }
    }
).single('myimage');


function checkFilter(file,cb)
{
    const filetypes =/jpeg|png|gif|jpg/;

    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());

    const mimetype=filetypes.test(file.mimetype);
    if(mimetype && extname)
    {
        return cb(null,true);
    }
    else 
    {
        cb('error only images');
    }
}

 app.set('view engine','ejs');

app.use(express.static('./public'));

app.get('/',(req,res)=>res.render('index'))

app.post('/uploads',(req,res)=>
{
    upload(req,res,(err)=>
    {
        if(err)
        {
            res.render('index',
            {
                msg:err
               
            })
        }
        else{
            if(req.file==undefined)
            {
                res.render('index',{
                    msg:"please select a file"
                })
            }
            else 
            {
                res.render('index',{
                    msg:'file uploaded',
                    file:`uploads/${req.file.filename}`
                })
            }
        }
    })
})
 

const port =5000;

app.listen(port,()=>console.log(`Server runnng at port ${port}`));