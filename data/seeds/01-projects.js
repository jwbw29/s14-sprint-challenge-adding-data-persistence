const projects = [
  {
    project_id: 1,
    project_name: "sapien urna pretium nisl",
    project_description:
      "gravida nisi at nibh in hac habitasse platea dictumst aliquam augue quam sollicitudin",
    project_completed: false,
  },
  {
    project_id: 2,
    project_name: "metus sapien ut nunc vestibulum",
    project_description: null,
    project_completed: false,
  },
  {
    project_id: 3,
    project_name: "ut massa",
    project_description: null,
    project_completed: true,
  },
  {
    project_id: 4,
    project_name: "maecenas tincidunt lacus at velit",
    project_description: null,
    project_completed: true,
  },
  {
    project_id: 5,
    project_name: "lectus in est risus",
    project_description: null,
    project_completed: false,
  },
];

// const resources =

// const tasks =

// const project_resources =

exports.seed = async function (knex) {
  await knex("projects").insert(projects);
  // await knex('resources').insert(resources)
  // await knex('tasks').insert(tasks)
  // await knex('project_resources').insert(project_resources)
};
