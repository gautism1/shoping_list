// including libraries
const express=require('express');
const path = require("path");
const helmet = require("helmet");
const morgan =require('morgan');
const config=require("config")
const routes = require('./routes')
const app=express();
let cors = require('cors');
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')


// middlewares
app.use(cors());
app.use(cookieParser())
app.use(helmet());
 

app.use(express.static(path.join(__dirname, "build")));

app.get('/',function(req,res)
{
res.sendFile(path.join(__dirname,'build','index.html'))
})


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(morgan({}));
app.use(express.json({extended : false}));

// connecting withdb
const connectdb =require('./config/db');

connectdb();

  app.use('/',
  (req,res,next)=>{
    console.log("I am going to all routes from here ");next();
  },routes);

const port =process.env.PORT || 5000   ;
app.listen(port,() => console.log(`running at port ${port}`)) 