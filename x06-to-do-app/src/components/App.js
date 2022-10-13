import React, { Component } from "react";

import AddTask from "./AddTask";
import TaskList from "./TaskList";

import "./App.css";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Play in game",
        date: "2022-10-22",
        important: true,
        active: false,
        finishDate: null,
      },
      {
        id: 1,
        text: "Working",
        date: "2022-10-12",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "Sleping",
        date: "2022-12-22",
        important: false,
        active: false,
        finishDate: null,
      },
      {
        id: 3,
        text: "Wash car",
        date: "2023-10-22",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  deleteTask = (id) => {
    console.log(id);
  };

  changeTaskStatus = (id) => {
    console.log(id);
  };

  render() {
    return (
      <>
        <AddTask />
        <TaskList
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </>
    );
  }
}

export default App;