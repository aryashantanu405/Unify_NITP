const express=require('express');
const dotenv=require('dotenv');
dotenv.config();
const registerModel=require('./models/register.model');
const connecttodb=require('./config/registerdb');
connecttodb();
const app=express();
app.get('/',(req,res)=>{
    res.send('<h1>Hello World this is backend of the unify</h1>');
});

app.listen(3000);