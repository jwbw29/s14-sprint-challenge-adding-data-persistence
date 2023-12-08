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
- [x] `index.js`
- [x] `api/server.js`
- [ ] `model.js` inside `api/project`, `api/resource` and `api/task`
- [ ] `router.js` inside `api/project`, `api/resource` and `api/task`
- [ ] migration file(s)
- [x] seed file(s) **optional**

### Required Dependencies

The project needs some additional NPM dependencies in order to work.

### Required Scripts

Add `"start"`. `"server"`, `"migrate"` and `"rollback"` scripts to the `package.json` file. The tests depend on these scripts being correct!

### Required Tables

Build the migration(s) in Knex inside the `data/migrations` folder using appropriate data types and constraints. **You must use the table names and the column names described below.** To give a primary key a name different than `id`, do `table.increments("project_id")` instead of `table.increments()`.

- [x] A **project** is what needs to be done and is stored in a `projects` table with the following columns:

  - [x] `project_id` - primary key
  - [x] `project_name` - required
  - [x] `project_description` - optional
  - [x] `project_completed` - the database defaults it to `false` (integer 0) if not provided

- [x] A **resource** is anything needed to complete a project and is stored in a `resources` table with the following columns:

  - [x] `resource_id` - primary key
  - [x] `resource_name` - required and unique
  - [x] `resource_description` - optional

- [x] A **task** is one of the steps needed to complete a project and is stored in a `tasks` table with the following columns:

  - [x] `task_id` - primary key
  - [x] `task_description` - required
  - [x] `task_notes` - optional
  - [x] `task_completed` - the database defaults it to `false` (integer 0) if not provided
  - [x] `project_id` - required and points to an actual `project_id` in the `projects` table

- [x] A **resource assignment** connects a resource and a project, and is stored in a `project_resources` table. You decide what columns to use.

### Required Endpoints

Build an API inside the `api` folder with endpoints for:

- [x] `[POST] /api/resources`

  - Example of response body: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

- [x] `[GET] /api/resources`

  - Example of response body: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

- [x] `[POST] /api/projects`

  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

- [x] `[GET] /api/projects`

  - Even though `project_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`

- [ ] `[POST] /api/tasks`

  - Even though `task_completed` is stored as an integer, the API uses booleans when interacting with the client
  - Example of response body: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`

- [x] `[GET] /api/tasks`
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
[x] [1] can get all projects that exist in the table (8 ms)
[x] [2] each project contains project_name, project_description and project_completed (as a boolean) (9 ms)

## [POST] /api/projects
[x] [3] can add a new project to the table (4 ms)
[x] [4] responds with the newly created project with its project_completed as a boolean (5 ms)
[x] [5] rejects projects lacking a project_name with an error status code (6 ms)


* RESOURCES ENDPOINTS
## [GET] /api/resources
[x] [6] can get all resources in the table (5 ms)

## [POST] /api/resources

[x] [7] can add a new resource to the table (3 ms)
[x] [8] responds with the newly created resource (6 ms)
[x] [9] rejects a resource with an existing resource_name with an error status code (5 ms)


* TASKS ENDPOINTS
## [GET] /api/tasks
[x] [10] can get all tasks in the table (4 ms)
[x] [11] each task contains task_notes and task_description and task_completed (as a boolean) (7 ms)
[x] [12] each task contains the project_name and the project_description (4 ms)

## [POST] /api/tasks
[x] [13] can add a new task to the db (4 ms)
[ ] [14] responds with the newly created task with the task_completed as a boolean (5 ms)
[x] [15] rejects a task lacking a task_description with an error status code (6 ms)
[x] [16] rejects a task lacking a project_id with an error status code (4 ms)
[x] [17] rejects a task containing an invalid project_id with an error status code (4 ms)

-->
