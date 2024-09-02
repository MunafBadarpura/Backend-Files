const express = require("express");
const app = express();

// console.dir(app);
let port = 3000; //8080

app.listen(port, () => {
    console.log(`app is listning on port ${port}`);
});

// app.use((req, res) => {
//     console.log("Requst recived");
//     let code = "<h1>Heading</h1> <ul> <li>Apple</li> <li>Orange</li></ul>"
//     res.send(code);
// })


// Routing
app.get("/", (req,res) => {
    res.send("You contacted root(default) Path")
})
app.get("/apple", (req,res) => {
    res.send("You contacted apple Path")
})
app.get("/orange", (req,res) => {
    res.send("You contacted orange Path")
})
//Standad Path  //For All Paths
app.get("*", (req,res) => {
    res.send("This Path Does Not Exist")
})
// Post Req
app.post("/", (req,res) => {
    res.send("You contacted Post Path")
})
