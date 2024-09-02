// const { dir } = require("console");
const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override")

app.use(express.urlencoded({ express: true })); 
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));  // for views folder
app.use(express.static (path.join(__dirname, "public")));  // for public folder

let posts = [
    {
        id : uuidv4(),
        username : "munaf",
        content : "i love coding"
    },
    {
        id : uuidv4(),
        username : "hasan",
        content : "coding is important"
    },
    {
        id : uuidv4(),
        username : "afnan",
        content : "codinggggg"
    },
];

app.listen(port, () => {
    console.log(`listning on port ${port}`);
});

// main page
app.get("/", (req,res) => {
    res.render("index.ejs", {posts});
});

app.get("/new", (req,res) => {
    res.render("new.ejs");
});


app.post("/new", (req,res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({id, username, content});
    res.redirect("/");
});

app.patch