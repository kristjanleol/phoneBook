const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
require('./models/db');

const phone = require('./routes/phone');

const app = express();
app.set("view engine", ejs);
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));  

app.use(phone);

app.listen(9000, ()=>{
    console.log("Server is running on port 9000");
});

