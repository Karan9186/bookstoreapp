const mongoose=require("mongoose");
const {Schema}=mongoose;

const books=new Schema({
    name:{type:String,require:true},
    title: {type:String,require:true},
    price: {type:Number,require:true},
    category: {type:String,require:true},
    image: {type:String,require:true}
})

module.exports=mongoose.model("books",books)