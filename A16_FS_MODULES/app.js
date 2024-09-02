const fs = require("fs");

// console.log(fs);

console.log("start");

fs.writeFile("munaf2.txt", "hello guys", () => {
    console.log("DONEEE");

    fs.readFile("munaf2.txt", (err, data) => {
        console.log("error: ", err);
        console.log("data: ",data.toString());
    })
})

// this function do not have data prm
fs.appendFile("munaf.txt", " Added new text", (err) => { 
    console.log("data append succesfully");
})

console.log("end");