const express = require("express");
const app = express();

// console.dir(app);
let port = 3000; //8080

app.listen(port, () => {
    console.log(`app is listning on port ${port}`);
});


app.get("/", (req,res) => {
    res.send("You contacted root(default) Path")
})

// parameter

app.get("/:username", (req,res) => {
    console.log(req.params);
    let {username} = req.params;
    res.send(`welcome ${username}`);
})


// app.get("/:username/:id", (req,res) => {
//     console.log(req.params.username);
//     res.send(`Welcome ${req.params.username} And Id is ${req.params.id} `);
// })

