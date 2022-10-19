import React from "react";
import { NavLink } from "react-router-dom";

import "../styles/Navigation.css";

const list = [
  { name: "Start", path: "start" },
  { name: "Products", path: "products" },
  { name: "Contact", path: "contact" },
  { name: "Admin", path: "admin" },
];

const Navigation = () => {
  const menu = list.map((item) => (
    <li key={item.name}>
      <NavLink to={item.path}>{item.name}</NavLink>
    </li>
  ));
  return (
    <nav>
      <ul>{menu}</ul>
    </nav>
  );
};

export default Navigation;
