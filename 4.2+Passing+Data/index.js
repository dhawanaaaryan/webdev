import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/submit", (req, res) => {
  let f=req.body["fName"];
  let l=req.body["lName"];
  let numLetters = f.length + l.length;
  res.render("index.ejs", { number: numLetters });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
