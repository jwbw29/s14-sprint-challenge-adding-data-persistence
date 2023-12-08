// build your `Project` model here
// do your sql stuff here and bring in db-config

const db = require("../../data/dbConfig");

// get all projects
async function getProjects() {
  const projRow = await db("projects as p")
    // write the sql code first
    /**
     * Select *
     * From projects as p
     */
    .select("*");
  return projRow;
}

// post a new project
// write the SQL code first
/**
 *
 */
module.exports = { getProjects };
