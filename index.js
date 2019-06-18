const express = require("express");

const userController = require("./controllers/userController");

const cors = require("cors"); // for externsl request
var bodyparser = require("body-parser"); //for post method

const app = new express();

app.use(cors());
app.use(bodyparser.json());

const PORT = 8080;

app.get("/", (req, res) => {
  res.send("Backend API Created using Node-Express-MongoDb");
});

app.use("/user", userController);

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
