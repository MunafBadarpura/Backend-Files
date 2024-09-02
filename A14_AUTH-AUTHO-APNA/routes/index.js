var express = require('express');
var router = express.Router();
const User = require('./users');
const passport = require('passport');

router.get('/', function(req, res) {
  res.render("index.ejs");
});

// router.get("/demouser", async(req,res) => {
//   let fakeUser = new User({
//     email: "hello@mail.com",
//     username: "hello12334"
//   });
  
//   let registredUser = await User.register(fakeUser, "helloworld");
//   res.send(fakeUser);
// })


// SIGNUP
router.get("/signup", (req,res) => {
  res.render("user/signup");
});

router.post("/signup", async (req,res) => {
  try{
    let {username, email, password} = req.body;
    const newUser = new User({username, email});
    const registredUser = await User.register(newUser, password);
    res.redirect("/");
    console.log(registredUser);
  }
  catch(e){
    console.log(e);
    res.send(e.message)
  }
});


// LOGIN
router.get("/login", (req,res) => {
  res.render("user/login")
})

router.post("/login", passport.authenticate('local', {failureRedirect: "/login"}), async (req,res) => {
  // res.send("Welcome, you are succesfully LOGGED IN");
  res.render("index.ejs");
})

module.exports = router;
