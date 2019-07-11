const express = require("express");

const Data = require("./Data");
const userController = require("./controllers/userController");
const patientController = require("./controllers/patientController");

const cors = require("cors"); // for externsl request
var bodyparser = require("body-parser"); //for post method

const app = new express();

app.use(cors());
app.use(bodyparser.json());

const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Backend API Created using Node-Express-MongoDb");
});
app.get("/json", (req, res) => {
  res.send({
    data: [
      { op_number: 1, name: "name one", status: true },
      { op_number: 2, name: "name two", status: true },
      { op_number: 3, name: "name three", status: true },
      { op_number: 4, name: "name four", status: true },
      { op_number: 5, name: "name five", status: true }
    ]
  });
});

app.use("/user", userController);
app.use("/patients", patientController);

app.listen(PORT, () => {
  console.log("Server is running on port: " + PORT);
});
