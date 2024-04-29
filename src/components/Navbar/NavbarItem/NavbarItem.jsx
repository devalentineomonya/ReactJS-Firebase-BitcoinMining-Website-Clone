import React from "react";
import "./NavbarItem.css";
const NavbarItem = ({ NavLinkItem, setActiveTab, active }) => {
  return (
    <div
      className="navbar-item-container"
      onClick={() => setActiveTab(NavLinkItem.id)}
    >
      <div className={`navbar-icon ${active ? "active" : null}`}>
        {active ? NavLinkItem.icon2 : NavLinkItem.icon1}
      </div>
      
     <p className={`${active ? "hidden" : null}`}>{NavLinkItem.name}</p>
      <div className={`underline ${!active ? "hidden" : null}`}></div>
    </div>
  );
};

export default NavbarItem;
