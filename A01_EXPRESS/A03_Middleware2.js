const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("port is listning on 3000");
})

// Middlewares

// before every route use middleware execute
app.use((req,res,next) => {
    if(req.headers.username=="munaf" && req.headers.pass=="pass"){
        next();
    }
    res.send("you are not user");
})

function kidneyMiddleware(req,res,next){
    if(req.query.kidney <= 2 && req.query.kidney > 0) next(); 
    res.send("your kidney problem");
}


// Routes

app.get("/health", kidneyMiddleware, (req,res) => {
    res.status(200).json({
        msg:"you are eligible!! congratsss"
    })
} )

app.get("/user", (req,res) => {
    res.status(200).json({
        msg:"you are eligible!! congratsss"
    })
} )
