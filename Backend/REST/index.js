const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const { v4: uuidv4 } = require('uuid');
var methodOverride = require('method-override')

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride('_method'));


app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"public")));

let posts=[
    {
        id:uuidv4(),
        username:"apnacollege",
        content:"Hello everyone!WE are launching a new delta batch-Delta 2.0!It will be based on MERN stack development.Check our website for details and price.Early bird offer for first 5000 students.Get it",
    },
    {
        id:uuidv4(),
        username:"priya",
        content:"I am a MERN stack developer trying to jab an internship!I am also learning DSA in C++!Feel free to reach out to me for devlopment internship.Here is my linkedin profile.",
    },
    {
        id:uuidv4(),
        username:"raaina",
        content:"I just got my 1st ever internship in microsoft!For the first time i feel like i've achieved something in my life.Hope to get along with my colleagues and leran new things every day and become a better programmer!",
    },
];

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts});
});

app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
});

app.post("/posts",(req,res)=>{
    let {username,content}=req.body;
    let id=uuidv4();
    posts.push({id, username,content});
    // res.send("post req working!");
    res.redirect("/posts");
    // console.log(req.body);
    // console.log(posts);
});

app.get("/posts/:id",(req,res)=>{
    let {id}=req.params;
    // console.log(id);
    let post=posts.find((p)=> id==p.id);
    // console.log(post);
    res.render("show.ejs",{post});
});

app.patch("/posts/:id",(req,res)=>{
    let {id}=req.params;
    let newContent=req.body.content;
    // console.log(newContent);
    let post=posts.find((p)=> id==p.id);
    console.log(post);
    post.content=newContent;
    // console.log(newContent);
    // res.send("patch request working!");
    res.redirect("/posts");
});

app.get("/posts/:id/edit",(req,res) =>{
    let {id}=req.params;
    let post=posts.find((p)=> id==p.id);
    res.render("edit.ejs",{post});
});

app.delete("/posts/:id",(req,res)=>{
    let {id}=req.params;
    posts=posts.filter((p)=> id!=p.id);
    res.redirect("/posts");
});

app.listen(port,()=>{
    console.log("listening on port 8080");
});