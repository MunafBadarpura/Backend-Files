var express = require('express');
var router = express.Router();


router.get("/", (req,res) => {
    res.send("home")
})

router.get("/profile", (req,res) => {
    res.send("profile")
})



module.exports = router;
