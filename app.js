const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const express = require('express');
const app = express();     
const axios=require('axios');      
const cors=require('cors');
app.use(cors());
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const { default: mongoose } = require('mongoose');
const loginRoute=express.Router();    
app.use('/loginSignup',loginRoute);                               
app.listen(3000)                  
app.use(express.json());           
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/',(req,res)=>{
    res.sendFile('./index.html',{root:__dirname});
})
app.use(express.static('../EVENTO'));


app.post('/loginSignup/login.html', urlencodedParser,async function (req, res) {
    
    let userData=Array.from(await userModel.find({email:req.body.email}));
    
    if(userData.length!=0){
    if(userData[0].password.toString().localeCompare(req.body.password)==0){ 
        res.cookie('isLoggedIn',true, 
        {maxAge: 30*24 * 60 * 60 * 1000
        ,secure:true,
        httpOnly:true});
        res.cookie('userName',userData[0].name,{maxAge:30*24*60*60*1000,secure:true,httpOnly:false});
        res.json({message:'login successful'});
    }else{
        res.json({message:'password not matched'});
    }}else{
        res.json({message:"Signup first"})
    }
  
  })

       app.post('/loginSignup/signup.html', urlencodedParser,passwordChecker,createUserInMongoDb);
       async function passwordChecker(req,res,next) {
        let allUsers=await userModel.find({email:req.body.email});
        if(allUsers.length!=0){
          let articles=[{message:'Error got fixed'}]
           res.json({message:true});
           res.end();
        } else{console.log('no such user exists');next();}
        
        
       }
     
       async function createUserInMongoDb(req, res) {
        let dataObj=req.body;    
        let user=await userModel.create(dataObj);
        console.log(user);
        res.json({  
            data:user
        });}
 const db_link='mongodb+srv://admin:.Mt6pgf-C8vPMJc@cluster0.inxkt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(db_link).then(function(db){
    console.log("Database connected")
}).catch(function(err){
console.log(err);
});
const userSchema=mongoose.Schema({ 
    name:{
        type:String,
       
    },
    email:{   
        type:String, 
        
         
    },
    password:{
        type:String,
       
       
    }
 
});

const userModel=mongoose.model('userModel',userSchema); 
app.use((req,res)=>{
    res.status(404);
    res.sendFile('./404page.html',{root:__dirname});
   
   
})