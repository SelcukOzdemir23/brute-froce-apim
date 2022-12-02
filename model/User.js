const mongoose = require("mongoose"); 
const Schema = mongoose.Schema; 
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    
  },
  password: {
    type: String,
    required: true,
    minLength: 8,
  },
}); // Create user schema

module.exports = mongoose.model("User", userSchema); 
