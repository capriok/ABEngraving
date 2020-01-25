const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

const app = express();
const port = process.env.POTR || 5000;

app.use(express.json());

const uri =
  "mongodb+srv://admin:admin@cluster0-bezq0.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connected successfully");
});

const emailRoute = require("./email.route");
app.use("/joinlist", emailRoute);

//SERVER PORT LISTENER
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
