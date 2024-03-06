const express = require("express");
const bodyparser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
 const connectDb = require("./dbconfig/dbconfig");

const port = process.env.port || 5000;
const dummy = require("./Routes/route");
 connectDb();
const app = express();
app.use(express.json());
app.use(bodyparser.json());
app.use(cors());

// admin routes---------------------------

// general-----------------

app.get("/", (req, res) => {
  res.send("hello server this side");
});
app.use('/req',dummy)
// port no for server -----------------------------
app.listen(port, () => {
  console.log("listening in port 5000");
});
// 656e3c104768eacc6e682d36
