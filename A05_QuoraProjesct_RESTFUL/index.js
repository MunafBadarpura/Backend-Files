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

app.get("/", (req,res) => {
    res.send("go to /posts page")
});

// Main Page
app.get("/posts", (req,res) => {
    res.render("index.ejs", { posts });
});

// Creating New Post
app.get("/posts/new", (req,res) => {
    res.render("new.ejs");
});

app.post("/posts", (req,res) => {
    let {username, content} = req.body;
    let id = uuidv4(); // Create New Id
    posts.push({id, username, content});
    res.redirect("/posts");
});

// Post In Detail
app.get("/posts/:id", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", {post});
});

// Post Edit
app.get("/posts/:id/edit", (req,res) => {
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs", {post});
})


app.patch("/posts/:id", (req,res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    res.redirect("/posts");
});


// Post Delete
app.delete("/posts/:id", (req,res) => {
    let {id} = req.params;
    posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
})
