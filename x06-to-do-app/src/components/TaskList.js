import React from "react";

import Task from "./Task";

function TaskList(props) {
  const tasks = props.tasks.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <div className="task-list">
      <h2>Tasks to be done</h2>
      {tasks}

      <hr />
      <h2>Tasks completed (0)</h2>
    </div>
  );
}

export default TaskList;
