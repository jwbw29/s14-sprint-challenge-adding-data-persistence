const db = require("../../data/dbConfig");

async function getProjects() {
  const projRow = await db("projects").select("*");

  const projects = projRow.map((proj) => {
    return {
      project_id: proj.project_id,
      project_name: proj.project_name,
      project_description: proj.project_description,
      project_completed: proj.project_completed === 0 ? false : true,
    };
  });

  return projects;
}

function createProject(proj) {
  return db("projects")
    .insert(proj)
    .then(([project_id]) => {
      return db("projects")
        .where("project_id", project_id)
        .first()
        .then((newProj) => {
          return {
            project_id: newProj.project_id,
            project_name: newProj.project_name,
            project_description: newProj.project_description,
            project_completed: newProj.project_completed === 0 ? false : true,
          };
        });
    });
}
module.exports = { getProjects, createProject };
