# Adding Data Persistence Sprint Challenge

## Tools

- Node >= 16.x
- NPM >= 8.x (update NPM executing `npm i -g npm`)
- Unix-like shell (Gitbash/bash/zsh)

## Project Set Up

- Fork, clone, and `npm install`.
- Run tests locally executing `npm test`.

## Project Instructions

### Introduction

In this project you will be given a set of requirements and must design a database to satisfy them. As a part of this process you'll also build an API with endpoints to access the data.

### Files to Complete

- [x] `package.json`
- [ ] `index.js`
- [ ] `api/server.js`
- [ ] `model.js` inside `api/project`, `api/resource` and `api/task`
- [ ] `router.js` inside `api/project`, `api/resource` and `api/task`
- [ ] migration file(s)
- [ ] seed file(s) **optional**

### Required Dependencies

The project needs some additional NPM dependencies in order to work.

### Required Scripts

Add `"start"`. `"server"`, `"migrate"` and `"rollback"` scripts to the `package.json` file. The tests depend on these scripts being correct!

### Required Tables

Build the migration(s) in Knex inside the `data/migrations` folder using appropriate data types and constraints. **You must use the table names and the column names described below.** To give a primary key a name different than `id`, do `table.increments("project_id")` instead of `table.increments()`.

- [ ] A **project** is what needs to be done and is stored in a `projects` table with the following columns:

  - [ ] `project_id` - primary key
  - [ ] `project_name` - required
  - [ ] `project_description` - optional
  - [ ] `project_completed` - the database defaults it to `false` (integer 0) if not provided

- [ ] A **resource** is anything needed to complete a project and is stored in a `resources` table with the following columns:

  - [ ] `resource_id` - primary key
  - [ ] `resource_name` - required and unique
  - [ ] `resource_description` - optional

- [ ] A **task** is one of the steps needed to complete a project and is stored in a `tasks` table with the following columns:

  - [ ] `task_id` - primary key
  - [ ] `task_description` - required
  - [ ] `task_notes` - optional
  - [ ] `task_completed` - the database defaults it to `false` (integer 0) if not provided
  - [ ] `project_id` - required and points to an actual `project_id` in the `projects` table

- [ ] A **resource assignment** connects a resource and a project, and is stored in a `project_resources` table. You decide what columns to use.

### Required Endpoints

Build an API inside the `api` folder with endpoints for:

- [ ] `[POST] /api/resources`

  - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

- [ ] `[GET] /api/resources`

  - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

- [ ] `[POST] /api/projects`

  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

- [ ] `[GET] /api/projects`

  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`

- [ ] `[POST] /api/tasks`

  - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`

- [ ] `[GET] /api/tasks`
  - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Each task must include `project_name` and `project_description`
  - Example of response body: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`

**Important Notes:**

- Run tests locally by executing `npm run test`. Tests will be very broken until you flesh out the project sufficiently.
- You are welcome to create additional files for middlewares etc, but **do not move or rename existing files** or folders.
- Do not make changes to your `package.json` except to add **additional** dependencies and scripts. Do not update existing packages.
- Delete `test.db3` and `database.db3` and re-run migrations and tests, if you suspect half-finished code left your databases in a broken state.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review, refine, and assess your work and perform basic professional polishing.

<!--
# TESTS

[x] [0] sanity check (56 ms)
    - server.js

* PROJECTS ENDPOINTS
## [GET] /api/projects
[ ] [1] can get all projects that exist in the table (8 ms)
[ ] [2] each project contains project_name, project_description and project_completed (as a boolean) (9 ms)

## [POST] /api/projects
[ ] [3] can add a new project to the table (4 ms)
[ ] [4] responds with the newly created project with its project_completed as a boolean (5 ms)
[ ] [5] rejects projects lacking a project_name with an error status code (6 ms)


* RESOURCES ENDPOINTS
## [GET] /api/resources
[ ] [6] can get all resources in the table (5 ms)

## [POST] /api/resources

[ ] [7] can add a new resource to the table (3 ms)
[ ] [8] responds with the newly created resource (6 ms)
[ ] [9] rejects a resource with an existing resource_name with an error status code (5 ms)


* TASKS ENDPOINTS
## [GET] /api/tasks
[ ] [10] can get all tasks in the table (4 ms)
[ ] [11] each task contains task_notes and task_description and task_completed (as a boolean) (7 ms)
[ ] [12] each task contains the project_name and the project_description (4 ms)

## [POST] /api/tasks
[ ] [13] can add a new task to the db (4 ms)
[ ] [14] responds with the newly created task with the task_completed as a boolean (5 ms)
[ ] [15] rejects a task lacking a task_description with an error status code (6 ms)
[ ] [16] rejects a task lacking a project_id with an error status code (4 ms)
[ ] [17] rejects a task containing an invalid project_id with an error status code (4 ms)

-->
