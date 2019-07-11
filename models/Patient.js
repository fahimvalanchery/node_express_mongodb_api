const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/UserDB", { useNewUrlParser: true });
const Schema = mongoose.Schema;

var PatientSchema = new Schema({
  name: String,
  age: String,
  dob: String,
  gender: String,
  occupation: String,
  address: [
    {
      address_1: String,
      address_2: String,
      address_3: String,
      country: String,
      state: String,
      city: String,
      pincode: String
    }
  ],
  contact: [
    {
      contact_type: String,
      contact_details: String
    }
  ],
  reference: [
    {
      reference_by: String,
      reference_reason: String
    }
  ]
});

var PatientData = mongoose.model("patient", PatientSchema); //PatientData is the model and PatientSchema is the schema

module.exports = PatientData;
