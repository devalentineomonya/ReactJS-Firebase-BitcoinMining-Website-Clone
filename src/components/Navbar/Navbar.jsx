import React, { useState } from "react";
import "./Navbar.css";
import NavbarItem from "./NavbarItem/NavbarItem";
import NavLinks from "../../assets/Data/NavLinks.jsx";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(1)
  return (
    <div className="navbar">
      {NavLinks.map((NavLink) => (
        <NavbarItem NavLinkItem={NavLink} key={NavLink.id} active={activeTab === NavLink.id} setActiveTab={setActiveTab} />
      ))}
    </div>
  );
};

export default Navbar;
