var express = require('express');
var router = express.Router();
const userModel = require("./users");


router.get('/', function(req, res) {
  res.render('index');
});

router.get('/create', async (req,res) => {
  userData = await userModel.create({
    username: "munaf",
    nickname: "munna",
    discription: "i am a learner of web-devlopment , currently i learning JavaScript",
    categories: ['html', 'css', 'js', 'express'],
  });

  res.send(userData);
});

router.get('/find', async(req,res) => {
  // let regex = RegExp("^haRshita$", "i");
  // let user = await userModel.find({categories: {$all: ['js']}});
  // let date1 = new Date('2024-05-28');
  // let date2 = new Date('2024-05-29');
  // let user = await userModel.find({ dateCreated: {$gte: date1, $lte:date2} });

  // let user = await userModel.find({
  //   $expr: {
  //     $and: [
  //       { $gte: [ { $strLenCP: '$nickname' },0 ] },
  //       { $lte: [ { $strLenCP: '$nickname' },10 ]}
  //     ]
  //   }
  // });


  res.send(user);
})

module.exports = router;
