import React, { Component } from "react";

class AddTask extends Component {
  state = {
    text: "",
    important: false,
    date: "",
  };
  handleChangeText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  handleImportant = () => {
    this.setState({
      important: !this.state.important,
    });
  };
  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };
  handleAddTask = () => {
    console.log("dziala");
  };
  render() {
    return (
      <div>
        <input
          onChange={this.handleChangeText}
          type="text"
          placeholder="Add task"
          value={this.state.text}
        ></input>
        <label htmlFor="important">
          <input
            onChange={this.handleImportant}
            type="checkbox"
            id="important"
            checked={this.state.important}
          />{" "}
          important
        </label>
        <br />
        <br />
        <label htmlFor="date">
          Until when to do{" "}
          <input
            onChange={this.handleDate}
            type="date"
            id="date"
            value={this.state.date}
            min="2022-01-01"
            max="2023-01-01"
          />
        </label>
        <br />
        <br />
        <button onClick={this.handleAddTask}>Add task</button>
        <hr />
      </div>
    );
  }
}

export default AddTask;
