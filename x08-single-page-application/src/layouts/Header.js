import React from "react";
import { Route, Routes } from "react-router-dom";

import "../styles/Header.css";

import header1 from "../images/header1.jpg";
import header2 from "../images/header2.jpg";
import header3 from "../images/header3.jpg";
import header4 from "../images/header4.jpg";

const HeaderImage = (props) => {
  return <img src={props.picture} alt="city" />;
};

const list = [
  {
    path: "start",
    picture: header1,
    alt: "city",
  },
  {
    path: "products",
    picture: header2,
    alt: "city",
  },
  {
    path: "contact",
    picture: header3,
    alt: "city",
  },
  {
    path: "admin",
    picture: header1,
    alt: "city",
  },
  {
    path: "/",
    picture: header1,
    alt: "city",
  },
  {
    path: "*",
    picture: header4,
    alt: "error",
  },
];

const Header = () => {
  const imgList = list.map((item) => (
    <Route
      key={item.path}
      path={item.path}
      element={
        <HeaderImage picture={item.picture} alt={item.alt}></HeaderImage>
      }
    />
  ));
  return (
    <>
      <Routes>{imgList}</Routes>
    </>
  );
};

export default Header;
