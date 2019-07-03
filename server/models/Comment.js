// Declaring and exporting comment model //

// importing modules
let mongoose = require("mongoose");

// defining schema
// TODO : on frontend, while displaying the comments, use added on date to arrange the comments, do we use default timestamps or add our own date
let commentSchema = new mongoose.Schema({

  // the actual comment text
  comment: {
    type: String,
    required: true,
  },
  // author of the comment
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  // project the comment belongs to
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },

}, {
    timestamps: true,
  });

// requiring and exporting comment model
let Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;