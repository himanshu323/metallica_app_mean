let env=process.env.NODE_ENV || "development";

if(env==="development" || env==="test"){

    const config=require("./config.json");
           let envValue= config[env];

           Object.keys(envValue).forEach((key)=>{
               process.env[key]=envValue[key];
           })
}

