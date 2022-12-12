import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import '../assets/css/Layout.css'

const Layout = () => {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
