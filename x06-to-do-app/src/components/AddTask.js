import React, { Component } from "react";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);

  state = {
    text: "",
    important: false,
    date: this.minDate,
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
    const task = {
      id: this.props.id,
      text: this.state.text,
      date: this.state.date,
      important: this.state.important,
      active: true,
      finishDate: null,
    };

    if (this.state.text.length < 2) return;
    this.props.add(task);
    this.setState({
      text: "",
      important: false,
      date: this.minDate,
    });
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + `${this.minDate.slice(4, 10)}`;

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
            min={this.minDate}
            max={maxDate}
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
