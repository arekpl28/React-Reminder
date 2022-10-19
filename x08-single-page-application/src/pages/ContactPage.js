import React, { Component } from "react";

import "../styles/Contact.css";

class ContactPage extends Component {
  state = {
    value: "",
  };
  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      value: "",
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h3>Contact</h3>
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    );
  }
}

export default ContactPage;
