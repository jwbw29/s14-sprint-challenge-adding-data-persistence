const db = require("../../data/dbConfig");

async function getResources() {
  const resRow = await db("resources").select("*");
  return resRow;
}
function createResource(res) {
  return db("resources")
    .insert(res)
    .then(([resource_id]) => {
      return db("resources").where("resource_id", resource_id).first();
    });
}

module.exports = { getResources, createResource };
