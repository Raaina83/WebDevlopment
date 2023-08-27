const express=require("express");
const app=express();

const port=8080;

app.set("view engine","ejs");
app.get("/",(req,res) =>{
    res.send("This is a home path!");
});
app.listen(port,() =>{
    console.log("listening on port 8080");
});