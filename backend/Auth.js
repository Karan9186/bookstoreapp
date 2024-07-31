const jwt=require("jsonwebtoken")
const checkAuth=(req,res,next)=>{
  const auth=req.headers['authorization'];
  if(!auth){
    return res.status(403)
      .json({message:"unauthorized, jwt require"})
  }
  try{
    const decode=jwt.verify(auth,process.env.SECRETKEY);
    req.user=decode
    console.log("the req.user=",req.user);
      next();
    
  }catch(err){
    return res.send({message:"unauthorized, jwt invalid"})
  }
}

module.exports=checkAuth;