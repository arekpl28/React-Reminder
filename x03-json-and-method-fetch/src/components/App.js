import React, { Component } from "react";

import Word from "./Word";

import "./App.css";

class App extends Component {
  state = {
    words: [],
    isLoaded: false,
  };

  fetchData = () => {
    fetch("data/words.json")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          words: data.words,
          isLoaded: true,
        });
      });
  };

  componentDidMount() {
    setTimeout(this.fetchData, 3000);
  }

  render() {
    const words = this.state.words.map((word) => (
      <Word key={word.id} english={word.en} polish={word.pl} />
    ));
    return (
      <>
        <ul>{this.state.isLoaded ? words : "Loading data"}</ul>
      </>
    );
  }
}

export default App;
