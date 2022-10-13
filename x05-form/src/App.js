import React, { Component } from "react";

import "./App.css";

class App extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    accept: false,

    errors: {
      username: false,
      email: false,
      password: false,
      accept: false,
    },
  };

  messages = {
    username_incorect:
      "The name must be longer than 10 characters and must not contain spaces.",
    email_incorect: "Missing @ in the e-mail adress",
    password_incorect: "The password must be exactly 8 characters long",
    accept_incorect: "You must accept the consent.",
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
    const validation = this.formValidation();
    if (validation.correct) {
      this.setState({
        username: "",
        email: "",
        password: "",
        accept: false,

        errors: {
          username: false,
          email: false,
          password: false,
          accept: false,
        },
      });
      alert("wysłany");
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          password: !validation.password,
          accept: !validation.accept,
        },
      });
    }
  };

  formValidation = () => {
    let username = false;
    let email = false;
    let password = false;
    let accept = false;
    let correct = false;

    if (
      this.state.username.length > 10 &&
      this.state.username.indexOf(" ") === -1
    ) {
      username = true;
    }
    if (this.state.email.indexOf("@") !== -1) {
      email = true;
    }
    if (this.state.password.length === 8) {
      password = true;
    }
    if (this.state.accept) {
      accept = true;
    }
    if (username && email && password && accept) {
      correct = true;
    }

    return {
      username,
      email,
      password,
      accept,
      correct,
    };
  };

  render() {
    const { username, email, password, accept } = this.state.errors;
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
              {username ? (
                <span
                  style={{
                    color: "red",
                  }}
                >
                  {this.messages.username_incorect}
                </span>
              ) : null}
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
              {email ? (
                <span
                  style={{
                    color: "red",
                  }}
                >
                  {this.messages.email_incorect}
                </span>
              ) : null}
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
              {password ? (
                <span
                  style={{
                    color: "red",
                  }}
                >
                  {this.messages.password_incorect}
                </span>
              ) : null}
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
              {accept ? (
                <span
                  style={{
                    color: "red",
                  }}
                >
                  {this.messages.accept_incorect}
                </span>
              ) : null}
            </label>
            <button>Send</button>
          </form>
        </div>
      </>
    );
  }
}

export default App;
