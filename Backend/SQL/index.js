const { faker } = require('@faker-js/faker');
const mysql = require('mysql2');
const express=require('express');
const app=express();
const path=require('path');
const methodOverride=require('method-override');

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true})); 
app.set("view engine","ejs");
app.set("views", path.join(__dirname,"/views"));
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password:'Raaina@14778'
});

let getRandomUser= () =>{
  return [
     faker.string.uuid(),
     faker.internet.userName(),
     faker.internet.email(),
     faker.internet.password()
  ];
};

// let q="INSERT INTO user(id,username,email,password) VALUES (?,?,?,?)";//query
// let user=["priya","priya_jyot","priya@yahoo.in","abcde"];//will act as our placeholder

// let users=[["raaina","raaina619","raaina@gmail.com","1234"],//for multiple users
// ["preti","preti_sh","preti@gmail.com","abcdef"]
// ];

// let q="INSERT INTO user(id,username,email,password) VALUES ?";//query
// let data=[];
// for(let i=0;i<100;i++){
//   data.push(getRandomUser()); //100 fake users!!
// }



// connection.end();

app.get("/", (req,res) =>{
  let q=`SELECT count(*) FROM user`;
  try{
  connection.query(q, (err,result)=>{
    if(err) throw err;
    let count=result[0]["count(*)"];
    res.render("home.ejs",{ count }); 
});
} catch(err){
  res.send("Some error occured in database!");
};
});

app.get("/user",(req,res) =>{
  let q=`SELECT * FROM user`;
  try{
    connection.query(q, (err,users)=>{
      if(err) throw err;
      res.render("users.ejs",{users}); 
  });
  } catch(err){
    res.send("Some error occured in database!");
  };
})

app.get("/user/:id/edit", (req,res) =>{
  let {id}=req.params;
  let q=`SELECT * FROM user WHERE id='${id}'`;
  try{
    connection.query(q, (err,result)=>{
      if(err) throw err;
      let user= result[0];
      res.render("edit.ejs",{user}); 
  });
  } catch(err){
    res.send("Some error occured in database!");
  };
});

app.get("/user/new", (req,res) =>{
  res.render("new.ejs");
});

app.patch("/user/:id", (req,res) =>{
  let {id}=req.params;
  let{password:formPass, username:newUsername}=req.body;
  let q=`SELECT * FROM user WHERE id='${id}'`;
  try{
    connection.query(q, (err,result)=>{
      if(err) throw err;
      let user= result[0];
      if(formPass!=user.password){
        res.send("Wrong password");
      } else{
        let q2=`UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
        try{
        connection.query(q2, (err,result) =>{
          if(err) throw err;
          res.redirect("/user");
        })}
        catch(err){
          res.send("Some error occured in DB");
        }
      }
  });
  } catch(err){
    res.send("Some error occured in database!");
  };
});

app.post("/user/new", (req,res) =>{
  let {username,email,password}=req.body;
  let id=faker.string.uuid();
  let q=`INSERT INTO user VALUES ('${id}','${username}','${email}','${password}')`;
  try{
  connection.query(q, (err,result) =>{
    if (err) throw err;
    // res.send(result);
    console.log("added new user");
    res.redirect("/user");
  });
}
  catch(err){
    res.send("Some error occured in DB");
  };
});

app.listen("8080", () =>{
  console.log("app is listening on port 8080");
});



  // console.log(getRandomUser());