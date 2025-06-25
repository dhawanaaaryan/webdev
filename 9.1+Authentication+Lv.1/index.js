import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db=new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"secrets",
  password:"27302302"
});
db.connect();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.get("/register", (req, res) => {
  res.render("register.ejs");
});

app.post("/register", async (req, res) => {
  const email = req.body.username;
  const password = req.body.password;

  try {
    const checkResult = await db.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    if (checkResult.rows.length > 0) {
      res.send("Email already exists. Try logging in.");
      console.log(checkResult);
    } else {
      const result = await db.query(
        "INSERT INTO users (email, password) VALUES ($1, $2)",
        [email, password]
      );
      console.log(result);
      res.render("secrets.ejs");
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/login", async (req, res) => {
  const e=req.body.username;
  const p=req.body.password;
  try{
    const rest=await db.query("select * from users where email=$1",[e]);
  if(rest.rows.length>0){
    const user=rest.rows[0];
    const pass=user.password;
    if(pass===p){
      res.render("secrets.ejs");
    }
    else{
      res.send("incorrect pass");
    }
  }
  else{
    res.send("user does not exsits");
}
}

  catch(error){
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
