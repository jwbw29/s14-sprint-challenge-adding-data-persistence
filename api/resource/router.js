// build your `/api/resources` router here
// define router
// bring in model

//write your endpoints

const resourcesRouter = require("express").Router();
const Resource = require("./model");

// eslint-disable-next-line no-unused-vars
resourcesRouter.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "Something went wrong in the RESOURCE ROUTER",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = resourcesRouter;
