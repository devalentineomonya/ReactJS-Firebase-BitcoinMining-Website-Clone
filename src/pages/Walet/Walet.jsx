import React from "react";
import MainContainer from "../../components/MainContainer/MainContainer";
import WaletQuickLinks from "../../components/Walet/WaletQuickLinks/WaletQuickLinks";
import WaletFunds from "../../components/Walet/WaletFunds/WaletFunds";
import "./Walet.css"
const Walet = () => {
  return (
    <MainContainer>
        <div className="walet-page-container">

      <WaletFunds/>
      <WaletQuickLinks/>
        </div>
    </MainContainer>
  );
};

export default Walet;
