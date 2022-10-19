import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/HomePage";
import PoductsPage from "../pages/ProductsPage";
import ContactPage from "../pages/ContactPage";
import AdminPage from "../pages/AdminPage";
import ErrorPage from "../pages/ErrorPage";

const Page = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="start" element={<HomePage />} />
      <Route path="products" element={<PoductsPage />} />
      <Route path="contact" element={<ContactPage />} />
      <Route path="admin" element={<AdminPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default Page;
