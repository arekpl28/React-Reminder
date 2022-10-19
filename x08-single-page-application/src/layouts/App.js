import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";

import Header from "./Header";
import Navigation from "./Navigation";
import Page from "./Page";
import Footer from "./Footer";

import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <header>{<Header />}</header>
          <main>
            <aside>{<Navigation />}</aside>
            <section>{<Page />}</section>
          </main>
          <footer>{<Footer />}</footer>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
