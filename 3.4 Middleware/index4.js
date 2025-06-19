import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";

const dir= dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let band1="";
app.use(bodyParser.urlencoded({extended:true}));

function band(req,res,next){
  band1=req.body["street"]+req.body["pet"];
  next();
}

app.use(band);
app.get("/",(req,res)=>{
  res.sendFile(dir+"/public/index.html");
});
app.post("/submit",(req,res)=>{
  res.send("<h1>Your band name</h1><h2>"+band1+"</h2>");
})
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
