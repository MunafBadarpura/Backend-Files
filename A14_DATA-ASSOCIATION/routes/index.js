var express = require('express');
var router = express.Router();

const userModel = require("./users");
const postModel = require("./posts");
const upload = require('./multer');

const LocalStrategy = require("passport-local");
const passport = require('passport');
passport.use(new LocalStrategy(userModel.authenticate()));

router.get('/', function(req, res) {
  res.render('index');
});

router.get('/login', function(req, res) {
  res.render('login', {error: req.flash("error")});
});

router.get('/feed', function(req, res) {
  res.render('feed');
});

router.post('/upload',isLoggedIn, upload.single('file'), async (req, res) => {
  if (!req.file) {
      return res.status(400).send('No files were uploaded.');
  }
  const user = await userModel.findOne({username: req.session.passport.user});
  const postdata = await postModel.create({
    image: req.file.filename,
    imageText: req.body.filecaption,
    user: user._id
  })

  user.posts.push(postdata._id);
  await user.save();
  res.redirect("/profile");
});

router.get('/profile',isLoggedIn, async function(req, res) {
  let user = await userModel.findOne({
    username: req.session.passport.user
  }).populate('posts')
  res.render("profile", {user})
});


router.post("/register", (req, res) => {
  const { username, email, fullname } = req.body;
  const userData = new userModel({ username, email, fullname });

  userModel.register(userData, req.body.password)
    .then(() => {
      passport.authenticate("local")(req, res, () => {
        res.redirect("/profile");
      });
    });
});

router.post("/login", passport.authenticate("local",
 {successRedirect: "/profile", failureRedirect: "/login", failureFlash: true}),
  (req,res) => {

});

// logout route
router.get("/logout", (req,res,next) => {;
  req.logout((err) => {
    if(err) { return next(err) }
    res.redirect("/login");
  });
});

function isLoggedIn(req,res,next){
  if(req.isAuthenticated()) return next();
  res.redirect("/login");
}


 
module.exports = router;




