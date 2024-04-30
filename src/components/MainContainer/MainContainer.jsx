import React, { useRef } from "react";
import "./MainContainer.css";
import Navbar from "../Navbar/Navbar";

const MainContainer = ({ children,pb="70px"}) => {
  const ContentContainer= useRef();


  return (
    <main className="main-container">
      <div className="main-content-container">
        <div ref={ContentContainer} className="content-container" style={{paddingBottom:pb}}>{children}</div>
      </div>
      <div className="navbar-container">
        <Navbar />
      </div>
    </main>
  );
};

export default MainContainer;
