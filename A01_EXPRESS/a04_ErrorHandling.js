const express = require("express");
const app = express();
const ExpressError = require("./a04_ErrorHandler");

app.use("/data" , (req,res,next) => {
    let {token} = req.query;
    if(token === "accesstoken") next();
    throw new ExpressError(401, "ACESS DENIED");
});

app.get("/", (req,res) => {
    res.send("i am root");
});

app.get("/err", (req,res) => {
    ab = ab // error
});

// Error Handler
app.use((err,req,res,next) => {
    // console.log(err);
    console.log("----ERROR-----");
    res.send(err);
})





app.listen(3000);
