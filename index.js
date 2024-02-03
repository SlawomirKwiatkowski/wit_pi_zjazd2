const express = require("express");

const mongoose = require("mongoose");

const app = express();
// Mongo DB conncetion
const database =
  "mongodb+srv://test:test@shoppinglist.jzsav3g.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(database)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err));

//BodyParsing
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("view engine", "ejs");

//Routes
app.use("/", require("./routes/index"));

app.listen(3000, console.log("Server has started at port " + 3000));
