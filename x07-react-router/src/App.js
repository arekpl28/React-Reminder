import React, { Component } from "react";
import { BrowserRouter, Routes, NavLink, Route } from "react-router-dom";

import "./App.css";

const Home = () => {
  return <h1>Home</h1>;
};
const News = () => {
  return <h1>News</h1>;
};
const Contact = () => {
  return <h1>Contact</h1>;
};
const NoPage = () => {
  return <h1>404</h1>;
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li>
              <NavLink to="home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
        <section>
          <Routes>
            <Route path="home" exact={true} element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </section>
      </BrowserRouter>
    );
  }
}

export default App;
