const express = require("express");
const TaskRoute = express.Router();
const Task = require("../models/Task");

// Add new taks
TaskRoute.route("/").post(function(req, res) {
  let post = new Task(req.body);
  post
    .save()
    .then(task => {
      res.status(201).json(task);
    })
    .catch(err => {
      res.status(500).send("There was an issue while saving");
    });
});
// Fetch all tasks
TaskRoute.route("/").get(function(req, res) {
  Task.find()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => {
      res.status(500).send("There was an issue while fetching");
    });
});

// Complete a task
TaskRoute.route("/:id").put(function(req, res) {
  Task.findOneAndUpdate({ _id: req.params.id }, { $set: { isCompleted: true } })
    .then(task => {
      res.status(200).json(task);
    })
    .catch(err => {
      res.status(500).send("There was an issue while updating");
    });
});
// Delete a task
TaskRoute.route("/:id").delete(function(req, res) {
  Task.findByIdAndRemove({ _id: req.params.id }, function(err, task) {
    if (err) res.status(500).json(err);
    else res.json(req.params.id);
  });
});
module.exports = TaskRoute;
