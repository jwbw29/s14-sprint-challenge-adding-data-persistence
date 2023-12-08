const projectsRouter = require("express").Router();
const Project = require("./model");

projectsRouter.get("/", (req, res, next) => {
  Project.getProjects()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

projectsRouter.post("/", (req, res, next) => {
  Project.createProject(req.body)
    .then((newProject) => {
      res.status(201).json(newProject);
    })
    .catch(next);
});

// eslint-disable-next-line no-unused-vars
projectsRouter.use((err, req, res, next) => {
  res.status(500).json({
    customMessage: "Something went wrong in the PROJECT ROUTER",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = projectsRouter;
