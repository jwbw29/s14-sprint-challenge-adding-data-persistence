// start your server here
require("dotenv").config();

const server = require("./api/server.js");

const port = process.env.PORT;

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

[
  {
    project_id: 1,
    project_name: "bar",
    project_description: null,
    project_completed: false,
  },
];
[
  {
    project_completed: 0,
    project_description:
      "doing chores around the house, like cleaning and stuff",
    project_id: 1,
    project_name: "house chores",
  },
];
