import React, { Component } from "react";
import { BrowserRouter, Routes, Outlet, Link, Route } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

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
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
