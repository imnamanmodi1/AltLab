// Declaring and Exporting User model //

// requiring modules
let mongoose = require("mongoose");

// defining schema
// TODO : NAMAN update the userschema as per your needs
let userSchema = new mongoose.Schema({
  // profile pic url
  profilePicture: {
    type: String,
  },
  // name off gmail profile
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // unique username
  username: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  // the entire gmail info received during OAuth login
  gmailInfo: {
    type: String,
  },
  // optional description from our website
  description: {
    type: String,
  },
  // projects user developed + collaborated on
  projects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project'
  }],
  // organisations he belongs to on our website
  organisation: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Organisation",
  }],
  // comments he made on his || others' projects
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment",
  }],
  // ratings he gave to other's projects
  ratings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rating",
  }],
}, {
    timestamps: true,
  });



// requiring and exporting model
let User = mongoose.model("User", userSchema);
module.exports = User;