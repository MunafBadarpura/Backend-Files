const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

const value = {
  name: "munaf",
  id:123123123
}

// jwt
const token = jwt.sign(value, "secret");

// original , if i pass wrong it givers error
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibXVuYWYiLCJpZCI6MTIzMTIzMTIzLCJpYXQiOjE3MjE4NzQ0MTF9.-V56cmntB3-6DvOk8BcorhUq1YnG_Iuxp8bUeyIHAUA


console.log(token);
const ver = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibXVuYWYiLCJpZCI6MTIzMTIzMTIzLCJpYXQiOjE3MjE4NzQ0MTF9.-V56cmntB3-6DvOk8BcorhUq1YnG_Iuxp8bUeyIHAUA", "secret")
console.log(ver);