const express = require("express");
const app = express();
const data = require("./router/route");
const bodyParser = require("body-parser");
const database = require("./database");
const port = 5000
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
 
database();
  
app.use("/api/v1", data);

app.listen(port, () => console.log("servr is running on " + port));
 