// Declaring and Exporting organisation model

// requiring modules
let mongoose = require("mongoose");

// defining schema
let orgSchema = new mongoose.Schema({

  // name of the organisation
  name: {
    type: String,
    required: true,
    unique: true,
  },
  // description for the organisation
  description: {
    type: String,
    required: true,
  },
  // the user who created the organisation
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // array of users in the organisation
  members: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  }],
  // optional image of the organisation to be displayed on its page
  organisationImage: {
    type: String,
  },

}, {
    timestamps: true
  });

// requiring and exporting organisation model
let Organisation = mongoose.model("Organisation", orgSchema);
module.exports = Organisation;