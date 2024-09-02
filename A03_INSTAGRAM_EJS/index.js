const express = require("express");
const app = express();
const path = require("path");
let port = 3000;
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));  
app.use(express.static(path.join(__dirname, "public")))
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home.ejs")
})


// Instagram
app.get("/ig/:username", (req, res) => {
    let {username} = req.params;
    const instData = require("./data.json");
    const data = instData[username];
   
    if(data){
        res.render("instagram.ejs", {data}); 
    }
    else{
        res.render("error.ejs", {data}); 
    }
})

app.listen(port, () => {
    console.log(`Listning On Port ${port}`);
});