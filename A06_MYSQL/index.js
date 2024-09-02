const { faker } = require('@faker-js/faker');
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
app.use(methodOverride('_method'));
app.use(express.urlencoded({ express: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));  

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'delta_app',
  password: 'munaf@786'
});

//let query = "INSERT INTO user (id, username, email, password) VALUES ?";

getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password()
  ];
}

// let data = [];
// for(let i=1;i<=100;i++){
//   data.push(getRandomUser());
// }

// try{
//     connection.query(query, [data], (err,result) => {
//       if(err) throw err;
//       console.log(result);
//     })
// }
// catch(err){
//   console.log(err);
// }

// connection.end();


// Home
app.get("/", (req,res) => {
  let q = "SELECT count(*) FROM user";
  try{
    connection.query(q, (err,result) => {
      if(err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs" ,{count});
    })
  }
  catch(err){
   console.log(err);
   res.send("Some Error");
  }
})

// SHOW ROUT
app.get("/user", (req,res) => {
  let q = "SELECT * FROM user";
  try{
    connection.query(q, (err,users) => {
      if(err) throw err;
      res.render("show.ejs", {users});
    })
  }
  catch(err){
    res.send("Some Error");
    console.log(err);
  }
})


// EDIT Rout
app.get("/user/:id/edit", (req,res) => {
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try{
    connection.query(q, (err,result) => {
      if(err) throw err;
      let user = result[0];
      res.render("edit.ejs", {user});
    })
  }
  catch(err){
    res.send("Some Error");
    console.log(err);
  }
})

// EDIT Rout
app.patch("/user/:id", (req,res) => {
  let {id} = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  let {password: formPassword, username: newUsername} = req.body;
  try{
    connection.query(q, (err,result) => {
      if(err) throw err;
      let user = result[0];
      if(formPassword != user.password){
        res.send("WRONG PassWord!!");
      }
      else{
        let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
        try{
          connection.query(q2, (err,result) => {
            if(err) throw err;
            res.redirect("/user");
          })
        }
        catch(err){
          res.send("Some Error");
          console.log(err);
        }
      }
    })
  }
  catch(err){
    res.send("Some Error");
    console.log(err);
  }
});




app.listen("8080", () => {
  console.log("app is listning on server 8080");
});