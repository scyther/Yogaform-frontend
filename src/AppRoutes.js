import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enroll from "./pages/Enroll";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Success from "./pages/Success";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/enroll" element={<Enroll />} />
          <Route path="/success" element={<Success />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
