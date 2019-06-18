const express = require("express");
const router = express.Router();
const Users = require("../models/User");

router.post("/signup", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  const userData = {
    email: req.body.email,
    password: req.body.password
  };
  let users = new Users(userData);
  users.save();
  res.send(userData);
});

router.post("/login", (req, res) => {
  let email = req.body.email;
  let password = req.body.password;

  Users.findOne({ email: email, password: password }, (err, user) => {
    if (err) {
      console.log(err);
      return res.status(500).send();
    }
    if (!user) {
      return res.status(404).send();
    }
    return res.status(200).send();
  });
});

module.exports = router;
