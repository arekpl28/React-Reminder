import React from "react";

function Task(props) {
  const red = {
    color: "red",
  };
  const { id, text, date, active, finishDate, important } = props.task;

  if (active) {
    return (
      <li>
        <p>
          <strong style={important ? red : null}>{text}</strong> by {date}{" "}
          <button onClick={() => props.change(id)}>Done</button>{" "}
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </li>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <li>
        <p>
          <strong>{text} </strong> (<em>do to {date}</em>) <br />- made on{" "}
          {finish} <button onClick={() => props.delete(id)}>X</button>
        </p>
      </li>
    );
  }
}

export default Task;
