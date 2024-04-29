import React from "react";
import "./MainContainer.css";
import Navbar from "../Navbar/Navbar";

const MainContainer = ({ children }) => {
  return (
    <main className="main-container">
      <div className="main-content-container">
        <div className="content-background-blur"></div>
        <div className="content-container">{children}</div>
      </div>
      <div className="navbar-container">
        <Navbar />
      </div>
    </main>
  );
};

export default MainContainer;
