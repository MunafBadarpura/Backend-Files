const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req,res) => {
    let {user, password} = req.query;  // in get route data available in query
    res.send(`GET Responce.Welcome ${user}`);
})

app.post("/register", (req,res) => {
    let {user, password} = req.body;
    res.send(`POST Responce.Welcome ${user}`);
})

app.listen(port, ()=> {
    console.log(`app is listning on port ${port}`);
})