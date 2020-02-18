const express = require("express");
const app = express();
const TaskRoute = express.Router();
const Task = require("../models/Task");

// Add new taks
// Fetch all tasks
// Complete a task
// Delete a task

module.exports = TaskRoute;
