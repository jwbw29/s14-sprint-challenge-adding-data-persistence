// build your `Resource` model here
// do your sql stuff here and bring in db-config

const db = require("../../data/dbConfig");

// get all resources
// Example Response: (notice the array)
// [
//   {
//     resource_id: 1,
//     resource_name: "foo",
//     resource_description: null,
//   },
// ];
async function getResources() {
  const resRow = await db("resources").select("*");
  return resRow;
}

// post a new resource
// Example response:
// {
//     "resource_id":1,
//     "resource_name":"foo",
//     "resource_description":null
// }
function createResource(res) {
  return db("resources")
    .insert(res)
    .then(([resource_id]) => {
      return db("resources").where("resource_id", resource_id).first();
    });
}

module.exports = { getResources, createResource };
