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
        active: true,
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
        active: true,
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
      {
        id: 4,
        text: "Dancing",
        date: "2022-02-22",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "Swiming",
        date: "2023-01-22",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
    taskNewId: 6,
  };

  deleteTask = (id) => {
    const tasks = [...this.state.tasks];

    tasks.splice(id, 1);
    for (let i = 0; i < tasks.length; i++) {
      tasks[i].id = i;
    }

    this.setState({
      tasks,
      taskNewId: this.state.taskNewId - 1,
    });
  };

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];

    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });

    for (let i = 0; i < tasks.length; i++) {
      tasks[i].id = i;
    }

    this.setState({
      tasks,
    });
  };

  addTask = (task) => {
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
      taskNewId: this.state.taskNewId + 1,
    }));
    return true;
  };

  render() {
    return (
      <>
        <h1>TODO APP</h1>
        <AddTask id={this.state.taskNewId} add={this.addTask} />
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
