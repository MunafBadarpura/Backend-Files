const express = require("express");
const app = express();

app.use(express.json())

app.listen(3000, () => {
    console.log("port is listning on 3000");
})

app.get("/", (req,res) => {
    let kidney = req.body.kidney;
    let kidneySize = kidney.length;
    res.send(`you have ${kidneySize} kidneys`);
})

// global cathches for handling all errors

app.use((err,req,res,next) => {
    res.json({
        msg:"Some error with server"
    })
    console.log(err);
})