// build your `/api/tasks` router here
// define router
// bring in model

//write your endpoints

const tasksRouter = require("express").Router();
const Task = require("./model");

tasksRouter.get("/", (req, res, next) => {
  Task.getTasks()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

tasksRouter.post("/", (req, res, next) => {
  Task.createTask(req.body)
    .then((newTask) => {
      res.status(201).json(newTask);
    })
    .catch(next);
});

// eslint-disable-next-line no-unused-vars
tasksRouter.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "Something went wrong in the TASK ROUTER",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = tasksRouter;
