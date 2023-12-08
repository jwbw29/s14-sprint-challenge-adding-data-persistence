// build your `/api/tasks` router here
// define router
// bring in model

//write your endpoints

const tasksRouter = require("express").Router();
const Task = require("./model");

// eslint-disable-next-line no-unused-vars
tasksRouter.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "Something went wrong in the TASK ROUTER",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = tasksRouter;
