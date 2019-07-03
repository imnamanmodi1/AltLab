// Declaring and exporting ratings model //

// requiring modules
let mongoose = require("mongoose");

// defining rating schema
let ratingSchema = new mongoose.Schema({
  // the rating
  rating: {
    type: Number,
    required: true,
  },
  // user who rated
  userRatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // project rated on
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
}, {
    timestamps: true,
  });

// requiring and exporting Rating model
let Rating = mongoose.model("Rating", ratingSchema);
module.exports = Rating;