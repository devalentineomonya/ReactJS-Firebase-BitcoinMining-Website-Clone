import React from "react";
import "./NavbarItem.css";
import { Link } from "react-router-dom";

const NavbarItem = ({ NavLinkItem, active }) => {
  return (
    <Link to={NavLinkItem.href}>
      <div
        className="navbar-item-container"
       
      >
        <div className={`navbar-icon ${active ? "active" : null}`}>
          {active ? NavLinkItem.icon2 : NavLinkItem.icon1}
        </div>

        <p className={`${active ? "hidden" : null}`}>{NavLinkItem.name}</p>
        <div className={`underline ${!active ? "hidden" : null}`}></div>
      </div>
    </Link>
  );
};

export default NavbarItem;
