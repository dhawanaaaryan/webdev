import express from "express";
const app=express();

app.get("/",(req,res)=>{
    console.log("runninig");
    res.send("<h1>hh</h1>");
    console.log(req);
});

app.listen(3000,()=>{
    console.log("server is running on port 3000");
});