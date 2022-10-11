import React, { Component } from "react";

import ButtonFetchUsers from "./ButtonFetchUsers";
import UsersList from "./UsersList";
import "./App.css";

const API = "https://randomuser.me/api/?results=1";

class App extends Component {
  state = {
    users: [],
  };

  handleDataFetch = () => {
    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        const user = data.results;
        this.setState((prevState) => ({
          users: [...user, ...prevState.users],
        }));
      })
      .catch((error) => console.log(error));
  };
  render() {
    const { users } = this.state;
    return (
      <>
        <div>
          <ButtonFetchUsers click={this.handleDataFetch} />
          {users.length ? <UsersList users={users} /> : null}
        </div>
      </>
    );
  }
}

export default App;
