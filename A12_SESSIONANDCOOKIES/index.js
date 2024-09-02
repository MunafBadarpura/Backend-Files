const express = require("express");
const app = express();
const session = require("express-session");
const cookieParser = require('cookie-parser');

app.use(session({
    resave: false,
    saveUninitialized: false,
    secret: "KuchBhiLikhSakteHai"
}));

app.use(cookieParser("secretForSignedCookie"));


// Session = req
app.get("/", (req,res) => {
    req.session.ban = true;
    res.send("Home Page, Session Set")
})

app.get("/check", (req,res) => {
    console.log(req.session);
    if(req.session.ban === true) res.send("You are banned");
    else res.send("Welcome To Check Page");
})

app.get("/remove", (req,res) => {
    req.session.destroy((err) => {
        if(err) throw err;
        res.send("Ban Removed");
    })
    
})

// Cookie = res
app.get("/cookie", (req,res) => {
    res.cookie("age", 25);
    res.send("Cookie Page, Cookie set");
})

app.get("/cookieread", (req,res) => {
    res.send(req.cookies)
})

app.get("/cookieclear", (req,res) => {
    res.clearCookie("age");
    res.send("Cookie Cleard");
})

app.get("/cookieprint", (req,res) => {
    res.send("Check On Teminal");
    console.log(req.cookies);
})

// Signed Cookie
app.get("/signed", (req,res) => {
    res.cookie("name", "munaf", {signed: true});
    res.send("Signed Cookie Set");
})
app.get("/signedprint", (req,res) => {
    res.send("Check On Teminal");
    console.log(req.signedCookies);
})

app.listen(3000);
