import React from "react";
import "./WaletItem.css";
const WaletItem = () => {
  return (
    <div className="walet-item-container">
      <div className="walet-item-left">
        <div className="walet-item-image"></div>
        <div className="walet-item-text">
          <h4>Recharge walet</h4>
          <h1>0</h1>
        </div>
      </div>
      <div className="walet-item-right">
        <button>Recharge</button>
      </div>
    </div>
  );
};

export default WaletItem;
