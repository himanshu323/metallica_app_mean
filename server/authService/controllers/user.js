const User=require("../models/user")

const bcrypt=require("bcryptjs");

const jwt =require("jsonwebtoken");




exports.createUser=(req,resp)=>{

    bcrypt.hash(req.body.password,10).then((hash)=>{


        const user = new User({
            email: req.body.email,
            password: hash
        })

        user.save().then((result)=>{


            resp.status(201).json({
                message:"User posted successfully",
                result:result
            })
        }).catch((e)=>{


            resp.status(400).json({
                message:"Duplicate Email Id, Please provide a new one"
                
            })  
        })
    })

}

exports.userLogin=(req,resp)=>{

    let fetchedUser;
    User.findOne({email:req.body.email}).then(user=>{
        console.log("Ouutttt login")

        console.log(user);

        console.log(req.body.password);
        if(!user){

            console.log("Inside login")
          return  resp.status(401).json({
                message:'Invalid emailId : Auth Failed'
            })
        }

        fetchedUser=user;
       return bcrypt.compare(req.body.password,user.password)


    }).then(result=>{
 console.log(result);
        if(!result){
            return  resp.status(401).json({
                message:'Invalid password : Auth Failed'
            })
        }

        let token=jwt.sign({email:fetchedUser.email,id:fetchedUser._id},process.env.JWT_TOKEN,{expiresIn:'1h'});


        resp.status(200).json({
            
            token:token,
            expiresIn:3600,
            userId:fetchedUser._id
        })

    }).catch(e=>{
        resp.status(401).json({
            message:'Auth Failed'
        })
    })
}

