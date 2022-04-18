const mongoose = require("mongoose");
// const passportLocalMongoose = require("passport-local-mongoose");
const { object } = require("webidl-conversions");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the article)
const signupuser = new Schema({
  first_name: String,
  second_name: String,
  email:String,
  password:String,
  // phonenumber:String,
});
 
 
// Create a model based on that schema
const userdb = mongoose.model("user", signupuser);
 
 
// export the model
module.exports = userdb; 