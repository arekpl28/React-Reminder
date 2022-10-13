import React from "react";

function Task(props) {
  const { id, text, date } = props.task;
  return (
    <li>
      <p>
        {text} by {date} <button onClick={() => props.change(id)}>Done</button>{" "}
        <button onClick={() => props.delete(id)}>X</button>
      </p>
    </li>
  );
}

export default Task;
