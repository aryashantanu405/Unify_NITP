const mongoose=require('mongoose');

const loginSchema=mongoose.Schema({
  username:{
    type:String,
    lowercase:true,
    trim:true,
    required:true,
    unique:true,
    minlength:[5,'Username must be atleast 5 characters long'],
  },
  password:{
    trim:true,
    type:String,
    required:true,
    minlength:[8,'Password must be atleast 8 characters long'],
  },
  about:{
    type:String,
    maxlength:[250,'About must be less than 250 characters long'],
    required:true,
    trim:true,
  },
  first_name:{
    type:String,
    required:true,
    trim:true,
    maxlength:[20,'First name must be less than 20 characters long'],
  },
  last_name:{
    type:String,
    trim:true,
    maxlength:[20,'Last name must be less than 20 characters long'],
  },
  email:{
    type:String,
    lowercase:true,
    trim:true,
    required:true,
    minlength:[12,'Email must be atleast 12 characters long'],
  },
  branch:{
    type:String,
    required:true,
  },
  city:{
    type:String,
    maxlength:[20,'City must be less than 20 characters long'],
  },
  state:{
    type:String,
    maxlength:[20,'State must be less than 20 characters long'],
  },
  postal_code:{
    type:Number,
    minlength:[6,'Postal code must be atleast 6 characters long'],
  },
});

const registerModel=mongoose.model('register',loginSchema);

module.exports=registerModel;