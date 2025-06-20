import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "ewrxdtcfgvybjnmkldfg";
const yourPassword = "aaryan";
const yourAPIKey = "c932a2c6-73d8-4fd2-bae1-a3cdd75ca6c4";
const yourBearerToken = "f430d09d-6865-4bb8-94c3-7b46e5c2f46d";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth",async (req, res) => {
try{
  const URL="https://secrets-api.appbrewery.com/random";
  const response=await axios.get(URL);
  const result=JSON.stringify(response.data);
  console.log(result);
  res.render("index.ejs",{content:result});
}
catch(error){
  console.log("error:"+error.message);
  res.render("index.ejs",{content:"error"+error.message});
}
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
});

app.get("/basicAuth", async (req, res) => {
  try{
  const URL="https://secrets-api.appbrewery.com/all?page=1";
  const response=await axios.get(URL,{auth:{
    username:yourUsername,
    password:yourPassword,
  }});
  const result=JSON.stringify(response.data);
  console.log(result);
  res.render("index.ejs",{content:result});
}
catch(error){
  console.log("error:"+error.message);
  res.render("index.ejs",{content:"error"+error.message});
}
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
});

app.get("/apiKey",async (req, res) => {
  try{
  const URL="https://secrets-api.appbrewery.com/filter?score=5&apiKey="+yourAPIKey;
  const response=await axios.get(URL);
  const result=JSON.stringify(response.data);
  console.log(result);
  res.render("index.ejs",{content:result});
}
catch(error){
  console.log("error:"+error.message);
  res.render("index.ejs",{content:"error"+error.message});
}
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
});

app.get("/bearerToken", async (req, res) => {
  try{
  const URL="https://secrets-api.appbrewery.com/secrets/2";
  const response=await axios.get(URL,{headers:{
      Authorization: "Bearer "+yourBearerToken,
  }});
  const result=JSON.stringify(response.data);
  console.log(result);
  res.render("index.ejs",{content:result});
}
catch(error){
  console.log("error:"+error.message);
  res.render("index.ejs",{content:"error"+error.message});
}
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
