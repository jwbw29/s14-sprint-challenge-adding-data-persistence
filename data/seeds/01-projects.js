const projects = [
  {
    project_name: "house chores",
    project_description:
      "doing chores around the house, like cleaning and stuff",
    project_completed: false,
  },
  {
    project_name: "work",
    project_description: "doing work stuff",
    project_completed: false,
  },
  {
    project_name: "school",
    project_description: "school work",
    project_completed: true,
  },
  {
    project_name: "kids stuff",
    project_description: null,
    project_completed: true,
  },
  {
    project_name: "gym stuff",
    project_description: null,
    project_completed: false,
  },
];

const resources = [
  {
    resource_name: "books",
    resource_description: null,
  },
  {
    resource_name: "shoes",
    resource_description:
      "suspendisse potenti nullam porttitor lacus at turpis donec posuere metus vitae ipsum aliquam non mauris morbi non lectus aliquam sit",
  },
  {
    resource_name: "bag",
    resource_description: null,
  },
  {
    resource_name: "laptop",
    resource_description:
      "eu orci mauris lacinia sapien quis libero nullam sit amet turpis elementum ligula vehicula consequat morbi",
  },
  {
    resource_name: "kids shoes",
    resource_description: null,
  },
  {
    resource_name: "broom",
    resource_description: null,
  },
];

const tasks = [
  {
    task_description: "pack laptop",
    task_notes: "pack laptop for work",
    task_completed: false,
    project_id: 2,
  },
  {
    task_description: "grab books",
    task_notes:
      "put books in bag and make sure to grab the right ones for the class",
    task_completed: true,
    project_id: 3,
  },
  {
    task_description: "pack gym bag",
    task_notes: null,
    task_completed: false,
    project_id: 5,
  },
  {
    task_description: "sweep the kitchen",
    task_notes: null,
    task_completed: false,
    project_id: 1,
  },
  {
    task_description:
      "grab kids shoes and put them in the bag for after school",
    task_notes: "self-explantory",
    task_completed: false,
    project_id: 4,
  },
];

const project_resources = [
  {
    project_id: 1,
    resource_id: 6,
  },
  {
    project_id: 2,
    resource_id: 3,
  },
  {
    project_id: 2,
    resource_id: 4,
  },
  {
    project_id: 3,
    resource_id: 1,
  },
  {
    project_id: 3,
    resource_id: 3,
  },
  {
    project_id: 4,
    resource_id: 3,
  },
  {
    project_id: 4,
    resource_id: 5,
  },
  {
    project_id: 5,
    resource_id: 2,
  },
  {
    project_id: 5,
    resource_id: 3,
  },
];

exports.seed = async function (knex) {
  await knex("projects").insert(projects);
  await knex("resources").insert(resources);
  await knex("tasks").insert(tasks);
  await knex("project_resources").insert(project_resources);
};
