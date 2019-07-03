// Declaring and exporting project Schema //

// importing modules
let mongoose = require("mongoose");

// defining project schema
let projectSchema = new mongoose.Schema({
  // name of the project
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  liveUrl: {
    type: String,
    required: true,
    unique: true,
  },
  // urls of images related to the project, if user wants to upload them
  images: [{
    type: String,
  }],
  // the user who initially adds the project
  developer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // list of all collaborators 
  // TODO : does this list includes the reference to the developer as well?
  collaborators: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  // e.g. #nodejs, #react etc
  tags: [{
    type: String,
  }],
  isCompleted: {
    type: Boolean,
    default: false,
  },
  // all the ratings given to the project
  ratings: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Rating",
  }],
}, {
  timestamps: true,
});

// requiring and exporting model
let Project = mongoose.model("Project", projectSchema);
module.exports = Project;