var express = require('express');
var router = express.Router();
const userModel = require("./users")
const passport = require('passport');

const localStrategy = require("passport-local");
passport.use(new localStrategy(userModel.authenticate()));


router.get('/', function(req, res) {
  res.render('index');
});

router.get('/profile', isLoggedin, function(req, res) {
  res.render("profile");
});


router.post('/register', (req,res) => {
  var userdata = new userModel({
    username: req.body.username,
    secret: req.body.secret
  });
});

userModel.register(userdata, req.body.password)
  .then((registereduser) => {
    passport.authenticate("local")(req,res, () => {
      res.redirect('/profile');
    })
  });

router.post('/login', passport.authenticate('local', {
  successRedirect: "/profile",
  failureRedirect: "/"
}), function(req,res) { })

router.get('/logout', (req,res,next) => {
  req.logout((err) => {
    if(err) { return next (err); }
    res.redirect('/');
  });
});

function isLoggedin(req, res, next){
  if(req.isAuthenticated()){
    return next();
  }
  res.redirect("/");
}

module.exports = router;
