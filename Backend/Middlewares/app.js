const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// app.use( (req,res,next) =>{
//     console.log("Hi,I am 1st middleware");
//     // res.send("middleware finished");
//     next();
// });

// app.use( (req,res,next) =>{
//     console.log("Hi,I am 2nd middleware");
    
// });

const checkToken = (req,res,next) =>{
    let {token} = req.query;
    if(token==="giveaccess"){
        next();
    }
    throw new ExpressError(401,"ACCESS DENIED!");
};

app.get("/api", checkToken,(req,res) =>{
    res.send("data");
});

app.get("/err", (req,res) =>{
    abcd=abcd;
});

app.get("/admin", (req,res) =>{
    throw new ExpressError(403,"Access is forbidden");
});

//CUSTOM ERROR HANDLING
app.use((err,req,res,next) =>{
    console.log("---ERROR---");
    let {status=500,message} = err;
    res.status(status).send(message);
});

// app.use((err,req,res,next) =>{
//     console.log("---ERROR 2nd MIDDLEWARE---");
//     next(err);
// });

//logger-morgan(well known)
// app.use( (req,res,next) =>{
//     console.log(req.method,req.hostname,req.path);
//     next();
// });

app.get("/", (req,res) =>{
    res.send("Hi, I am root");
});

app.get("/random", (req,res) =>{
    res.send("This is a random page");
});

app.listen(8080, () =>{
    console.log("app is listening on port 8080");
});