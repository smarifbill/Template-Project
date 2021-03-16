const express = require("express");
const path = require("path");
const app = express();

const port = process.env.PORT || 8088;
//app.set('port', process.env.PORT || 3000);

//set template engine to ejs
app.set("view engine", "ejs");

//use images & css files in static folder.
app.use("/static", express.static(path.join(__dirname, "static")));

let data = [
  {
    name: "burt lannister",
    age: 56,
    hobbies: ["reading", "polo"],
  },
  {
    name: "tobe nwige",
    age: 27,
    hobbies: ["writing", "pressing flowers"],
  },
  {
    name: "miguel atwood",
    age: undefined,
    hobbies: ["music", "mediation"],
  },
  {
    name: "hieu ngyen",
    age: 33,
    hobbies: undefined,
  },
  {
    name: undefined,
    age: undefined,
    hobbies: undefined,
  },
];

//get login page or route - home
app.get("/", function (req, res) {
  res.render("index", { data: data });
});

//listen on  port and console log when server is running

app.listen(port);
console.log(`Server is running at http://localhost:${port}`);
