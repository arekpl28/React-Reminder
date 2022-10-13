import React from "react";

import Task from "./Task";

function TaskList() {
  return (
    <div className="list">
      <h2>Tasks to be done</h2>
      <Task />
      <Task />
      <Task />
    </div>
  );
}

export default TaskList;
