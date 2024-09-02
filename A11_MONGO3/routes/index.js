var express = require('express');
var router = express.Router();
const userModel = require("./users")


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// create
// router.get('/create', async (req,res) => {
//     const user1 = await userModel.create({
//       username:"harsh01",
//       name:"Harsh",
//       age:20
//     });
//     res.send(user1);
// })

// find
// router.get('/find', async(req,res) => {
//   let allUser = await userModel.find();
//   res.send(allUser);
// })

// findOne
// router.get('/findOne', async(req,res) => {
//   let allUser = await userModel.findOne({
//     name: "Harsh"  
//   })
//   res.send(allUser);
// })

// findOneAndDelete
// router.get('/delete', async(req,res) => {
//   let deletedUser = await userModel.findOneAndDelete({
//     name: "Harsh"  
//   })
//   res.send(deletedUser);
// })


module.exports = router;
