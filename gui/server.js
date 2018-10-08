const express=require("express");
const path=require("path")

let app=express();

app.use(express.static(__dirname + '/dist/MetallicaApp'))


app.get("/*",(req,resp)=>{

    resp.sendFile(path.join(__dirname+'/dist/MetallicaApp/index.html'))
})

app.listen(process.env.PORT || 8080,()=>{
    console.log(`Server started`)
})