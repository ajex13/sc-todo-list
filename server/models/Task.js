const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for Task
let Task = new Schema(
  {
    title: {
      type: String
    },
    body: {
      type: String
    },
    isCompleted: {
      type: Boolean,
      default: false
    },
    dueDate: {
      type: Date,
      default: Date.now
    }
  },
  {
    collection: "tasks",
    timestamps: true
  }
);

module.exports = mongoose.model("Task", Task);
