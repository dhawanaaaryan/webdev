const port=3000;
import express from "express";
import {dirname} from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app=express();

//new git push
app.get("/",(req,res)=>{
    const today = new Date("15-06-2025");
    let d=today.getDay();
    if (d<5){
        res.render("index.ejs",{
            message:"Hi its a weekday, Time to work!"
        });
    }
    else{
         res.render("index.ejs",{
            message:"Hi its a weekend, Time to have fun"
        });
    }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});