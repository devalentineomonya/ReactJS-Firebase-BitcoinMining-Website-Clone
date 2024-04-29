import React from "react";
import "./MainContainer.css";

const MainContainer = ({ children }) => {
  return (
    <main className="main-container">
      <div className="main-content-container">
        <div className="content-background-blur"></div>
        <div className="content-container">{children}</div>
      </div>
    </main>
  );
};

export default MainContainer;
