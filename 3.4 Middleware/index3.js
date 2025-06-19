import express from "express";

const app = express();
const port = 3000;

app.use(logger);

app.get("/", (req, res) => {
  res.send("Heo");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

function logger(req,res,next){
  console.log("request:"+req.method);
  console.log("url:"+console.url);
  next();
}