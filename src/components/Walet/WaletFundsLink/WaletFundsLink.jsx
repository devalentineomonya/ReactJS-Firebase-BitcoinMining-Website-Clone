import React from "react";
import "./WaletFundsLink.css";
import { BsChevronRight, BsCreditCard } from "react-icons/bs";
const WaletFundsLink = () => {
  return (
    <div className="walet-funds-link-container">
      <div className="link-left-container">
        <BsCreditCard />
        Funding Records
      </div>
      <div className="link-right-container">
        <BsChevronRight/>
      </div>
    </div>
  );
};

export default WaletFundsLink;
