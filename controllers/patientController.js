const express = require("express");
const router = express.Router();
const Patient = require("../models/Patient");

router.post("/", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  const patientData = {
    name: req.body.name,
    age: req.body.age,
    dob: req.body.dob,
    gender: req.body.gender,
    occupation: req.body.occupation,
    address: req.body.address,
    contact: req.body.contact,
    reference: req.body.reference
  };
  let patients = new Patient(patientData);
  patients.save();
  res.send(patientData);
});

router.get("/", (req, res) => {
  Patient.find({}, (err, patient) => {
    res.json(patient);
    console.log("error " + err);
  });
});
router.get("/:id", (req, res) => {
  Patient.findById(req.params.id, (err, patient) => {
    res.json(patient);
    console.log("error " + err);
  });
});
router.delete("/:id", (req, res) => {
  Patient.findByIdAndRemove(req.params.id, (err, patient) => {
    res.json(patient);
    console.log("error " + err);
  });
});
router.put("/:id", (req, res) => {
  Patient.findByIdAndUpdate(req.params.id, (err, patient) => {
    res.json(patient);
    console.log("error " + err);
  });
});

module.exports = router;
