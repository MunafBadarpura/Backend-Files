const express = require("express");
const app = express();

// app.use("/data" , (req,res,next) => {
//     let {token} = req.query;
//     if(token === "accesstoken") next();
//     res.send("ACCESS DENIED!!!!");
// });

const checkToken = ("/data" , (req,res,next) => {
    let {token} = req.query;
    if(token === "accesstoken") next();
    res.send("ACCESS DENIED!!!!");
});

app.get("/", (req,res) => {
    res.send("i am root");
});

app.get("/data", checkToken,(req,res) => {
    res.send("DATA ACCESS!!!");
});





app.listen(3000);
