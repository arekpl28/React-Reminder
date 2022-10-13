import React from "react";

import Task from "./Task";

function TaskList(props) {
  const active = props.tasks.filter((task) => task.active === true);
  const done = props.tasks.filter((task) => task.active === false);

  const activeTask = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const doneTask = done.map((task) => (
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
      {activeTask.length > 0 ? activeTask : <h4>No tasks to do</h4>}

      <hr />
      <h2>
        Tasks completed (<em>{doneTask.length}</em>)
      </h2>
      {doneTask.length > 5 ? (
        <span>Only the last 5 items are displayed</span>
      ) : null}
      {doneTask.slice(0, 5)}
    </div>
  );
}

export default TaskList;
