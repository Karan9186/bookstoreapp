const mongoose=require('mongoose')
const Schema=mongoose.Schema;

const newUser=new Schema({
  name:String,
  email:String,
  password:String
})

module.exports=mongoose.model('userbook',newUser);