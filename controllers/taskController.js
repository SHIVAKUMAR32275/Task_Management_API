const Task = require("../models/Task");

// CREATE TASK
exports.createTask = async (req, res) => {
  const task = await Task.create({
    ...req.body,
    userId: req.user
  });

  res.json({
    status: "success",
    data: task
  });
};

// GET ALL TASKS
exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ userId: req.user });

  res.json({
    status: "success",
    data: tasks
  });
};

// GET SINGLE TASK
exports.getTask = async (req, res) => {
  const task = await Task.findOne({
    _id: req.params.id,
    userId: req.user
  });

  res.json({
    status: "success",
    data: task
  });
};

// UPDATE TASK
exports.updateTask = async (req, res) => {
  const task = await Task.findOneAndUpdate(
    { _id: req.params.id, userId: req.user },
    req.body,
    { new: true }
  );

  res.json({
    status: "success",
    data: task
  });
};

// DELETE TASK
exports.deleteTask = async (req, res) => {
  await Task.findOneAndDelete({
    _id: req.params.id,
    userId: req.user
  });

  res.json({
    status: "success",
    message: "Task deleted"
  });
};