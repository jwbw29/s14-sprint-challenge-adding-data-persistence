// build your `Project` model here
// do your sql stuff here and bring in db-config

const db = require("../../data/dbConfig");

// get all projects
async function getProjects() {
  const projRow = await db("projects as p").select("*");

  const project = projRow.map((proj) => {
    return {
      project_id: proj.project_id,
      project_name: proj.project_name,
      project_description: proj.project_description,
      project_completed: proj.project_completed === 0 ? false : true,
    };
  });

  return project;
}

// post a new project
// write the SQL code first
/**
 *
 */
module.exports = { getProjects };
