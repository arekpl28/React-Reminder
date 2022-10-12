import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    accept: false,
  };

  handleChange = (e) => {
    const name = e.target.name;
    if (name === "accept") {
      this.setState({
        [name]: e.target.checked,
      });
    } else {
      this.setState({
        [name]: e.target.value,
      });
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("OK");
  };

  render() {
    return (
      <>
        <div>
          <form onSubmit={this.handleSubmit} noValidate>
            <label htmlFor="user">
              Your name:
              <input
                type="text"
                id="user"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="emial">
              Your email:
              <input
                type="email"
                id="email"
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="password">
              Your password:
              <input
                type="password"
                id="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="accept">
              <input
                type="checkbox"
                name="accept"
                id="accept"
                checked={this.state.accept}
                onChange={this.handleChange}
              />{" "}
              I agree
            </label>
            <button>Send</button>
          </form>
        </div>
      </>
    );
  }
}

export default App;
