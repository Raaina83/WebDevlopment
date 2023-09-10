const express=require('express');
const app=express();
// console.dir(app);
let port=3000;
app.listen(port,() =>{
    console.log(`app is listening on port${port}`);
});

// app.use((req,res)=>{
//     console.log("request reseived!");
//     res.send("This is a basic response");
// });

app.get("/",(req,res) =>{
    res.send("Welcome!This is a root path");
});
app.get("/:username/:id",(req,res) =>{
    let {username,id}=req.params;
    res.send(`Welcome!This page belongs to @${username}.`);
});
app.get("/search", (req,res)=> {
    let {q}=req.query;
    console.log(req.query);
    let htmltstr=`<h2>You searched for query: ${q}`;
    res.send(htmltstr);
}) //QUERY STRING
// app.get("/apple",(req,res) =>{
//     res.send("You contacted apple path");
// });
// app.get("/home",(req,res) =>{
//     res.send("You contacted home path");
// });
// app.get("*", (req,res) =>{
//     res.send("Wrong path");
// });
// app.post("/",(req,res) =>{
//     res.send("You sent a post request to root path");
// });