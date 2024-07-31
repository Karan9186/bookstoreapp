const express=require('express')
const app=express();
const mongoose=require("mongoose")
const bookModel=require("./model/bookModel")
const cors=require('cors')
const userModel=require("./model/userModel")
const adminModel=require("./model/adminModel")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const env=require("dotenv")
const checkAuth=require("./Auth")

env.config();

app.use(cors())
mainConn().catch((err)=>console.log("error is ",err))

app.use(express.json())
async function mainConn(){
  await mongoose.connect(process.env.CONNECTION_MONGODB)
  console.log("connected")
}

app.get("/",async(req,res)=>{
  try{
    const alldata=await bookModel.find();
    res.send(alldata)
  }catch(err){
    res.send(err)
  }
})

app.get("/admin/",checkAuth,async(req,res)=>{
  try{
    const alldata=await bookModel.find();
   
    res.send(alldata)
  }catch(err){
    res.send(err)
  }
})

app.get("/:id",async(req,res)=>{
  try{
    const id=req.params.id;
    const user=await bookModel.findOne({_id:id})
    res.send(user);
  }catch(err){
    res.send(err)
  }
})

app.post("/signup/",async(req,res)=>{
  try{
    const userInfo=req.body;
    const user=new userModel(userInfo);
    user.password=await bcrypt.hash(userInfo.password,10);
    await user.save();
    res.send(user)
    console.log(userInfo);
  }
  catch(err){
    res.sendStatus(500);
    console.log("error to creating user");
  }
})

app.post("/login/",async(req,res)=>{
  try{
    const userInfo=req.body;
    const emailUser=userInfo.email
    const user=await userModel.findOne({email:emailUser})
    if(user){
     
      const isEqual=await bcrypt.compare(userInfo.password,user.password);
      if(!isEqual){
        res.send("invalid password")
      }
      const jwtoken=jwt.sign({email:user.email},process.env.SECRETKEY,{expiresIn:'24h'})
      res.send({
        name:user.name,
        token:jwtoken,
        email:user.email,
        message:"logined"
      })
    }else{
      res.send({messaage:"user not found"})
    }
  }
  catch(err){
    res.sendStatus(500);
    console.log("error to login user",err);
  }
})

app.post("/admin/login/",async(req,res)=>{
  try{
    const useremail=req.body.email;
    const admin=await adminModel.findOne({email:useremail})
    await console.log(admin);
    const jwttoken=jwt.sign({email:admin.email},process.env.SECRETKEY,
      {expiresIn:'24h'})
    res.send({
      token:jwttoken,
      email:admin.email
    })
  }catch(err){
    res.send(500);
    console.log("err to login ",err);
  }
})

app.post("/admin/signup/",async(req,res)=>{
  try{
    const adminInfo=req.body;
    const admin=new adminModel(adminInfo);
    await admin.save();
    res.send("admin created")
  }catch(err){
    res.send(500);
    console.log("err to creaing admin ",err);
  }
})
app.post("/",(req,res)=>{

    const book=new bookModel(req.body);
    book.save()
      .then((doc)=>{
        res.send(doc)
      })
      .catch((err)=>{
        res.send(err)
      })
})

app.patch("/:id",checkAuth,async(req,res)=>{
  const id=req.params.id;
  try{
    const book=await bookModel.findOneAndUpdate({_id:id},req.body,{new:true})
    res.send({message:"book updated"})
  }catch(err){
    res.send(err)
  }
})

app.delete("/:id",checkAuth,async(req,res)=>{
  const id=req.params.id;
  try{
    const book=await bookModel.findOneAndDelete({_id:id},{new:true})
    res.send({message:"book deleted"})
  }catch(err){
    res.send(err)
  }
})



app.listen(3000,()=>{
  console.log("server is running on port 3000")
})