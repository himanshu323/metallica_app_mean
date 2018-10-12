const jwt=require("jsonwebtoken")

module.exports=(req,resp,next)=>{
try{
    
    const token=req.headers.authorization.split(" ")[1];

   
    let decodedToken=jwt.verify(token,process.env.JWT_TOKEN);

    req.userData={email:decodedToken.email,id:decodedToken.id}


    next();

}
catch(error){

    return  resp.status(401).json({
        message:"You are not authenticated"
    })
}
}