// STATIC FILE STEPS
// 1. Crete a folder named public
// 2. create three folder inside it named images, stylesheets, javascripts
// 3. configure express static in index.js
//    app.use(express.static("./public"));
// 4. understand the path


const express = require("express");
const app = express();
const path = require("path");


app.listen(3000, () => {
  console.log(`app is listning on 3000`);
});

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));  
app.use(express.static(path.join(__dirname, "public")))
// app.use(express.static("public"));

app.get("/", (req,res) => {
    res.render("home");
})

app.get("/errorpage", (req,res, next) => {
    throw Error("Something Went Wrong")
})

// Error Handler
app.use( function errorHandler (err, req, res, next) {
    if (res.headersSent) {
      return next(err)
    }
    res.status(500)
    res.render("error", { error: err })
  })