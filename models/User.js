const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/UserDB", { useNewUrlParser: true });
const Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: String,
  password: String
});

var UserData = mongoose.model("user", UserSchema); //UserData is the model and UserSchema is the schema

module.exports = UserData;
