const f=require("fs");
// f.writeFile("hello.txt","whats up",(err)=>{
//     if(err) throw err;
//     console.log("file saved succesfully");
// });

f.readFile("hello.txt",(err,data)=>{
    if(err) throw err;
    console.log("data in file:"+data);
});