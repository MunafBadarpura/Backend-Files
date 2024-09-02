//npm init -y
//npm install express
//npm install ejs
//created view folder and inside , html created(EJS)

// EJS STESP : 
// install,
// app.set("view engine", "ejs"),  
// create views folder inside views folder create ejs files, 
// send ki jagas render use karo 


const express = require("express");
const app = express();
const path = require("path");
let port = 3000;

app.listen(port, () => {
    console.log(`Listning On Port ${port}`);
});

app.set("view engine", "ejs");  // for setting EJS into express
app.set("views", path.join(__dirname + "/views")); //For Tell Where IS "views" directory 



app.get("/", (req, res) => {
    res.render("home.ejs");  // for sending file, it is automatic find "views" folder 
})


// RollDice
app.get("/rolldice", (req, res) => {
    let diceValue = Math.floor(Math.random()*6) + 1;
    res.render("rolldice.ejs", {diceValue});  
})


// // Instagram
app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    res.render("instagram.ejs", {username}); 
})
    

// // Loop
app.get("/loop", (req, res) => {
    res.render("loop.ejs");  
})


