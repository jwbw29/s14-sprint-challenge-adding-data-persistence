const db = require("../../data/dbConfig");

async function getTasks() {
  const taskRow = await db("tasks as t")
    .select(
      "task_id",
      "task_description",
      "task_notes",
      "task_completed",
      "p.project_name",
      "p.project_description"
    )
    .leftJoin("projects as p", "p.project_id", "t.project_id");

  const tasks = taskRow.map((task) => {
    return {
      task_id: task.task_id,
      task_description: task.task_description,
      task_notes: task.task_notes,
      task_completed: task.task_completed === 0 ? false : true,
      project_name: task.project_name,
      project_description: task.project_description,
    };
  });

  return tasks;
}

function createTask(task) {
  return db("tasks")
    .insert(task)
    .then(([task_id]) => {
      return db("tasks")
        .where("task_id", task_id)
        .first()
        .then((newTask) => {
          return {
            task_id: newTask.task_id,
            task_description: newTask.task_description,
            task_notes: newTask.task_notes,
            task_completed: newTask.task_completed === 0 ? false : true,
            project_id: newTask.project_id,
          };
        });
    });
}

module.exports = { getTasks, createTask };
