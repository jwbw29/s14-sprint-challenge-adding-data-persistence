const resourcesRouter = require("express").Router();
const Resource = require("./model");

resourcesRouter.get("/", (req, res, next) => {
  Resource.getResources()
    .then((resources) => {
      res.status(200).json(resources);
    })
    .catch(next);
});

resourcesRouter.post("/", (req, res, next) => {
  Resource.createResource(req.body)
    .then((newResource) => {
      res.status(201).json(newResource);
    })
    .catch(next);
});

// eslint-disable-next-line no-unused-vars
resourcesRouter.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "Something went wrong in the RESOURCE ROUTER",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = resourcesRouter;
