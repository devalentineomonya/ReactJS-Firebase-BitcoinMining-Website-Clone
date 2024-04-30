import "./Navbar.css";
import NavbarItem from "./NavbarItem/NavbarItem";
import NavLinks from "../../assets/Data/NavLinks.jsx";
import { useLocation } from "react-router-dom";


const Navbar = () => {

  const location = useLocation()
  return (

          <div className="navbar">
            {NavLinks.map((NavLink) => (
              <NavbarItem
                NavLinkItem={NavLink}
                key={NavLink.id}
                active={ NavLink.href === location.pathname}
              />
            ))}
          </div>
    
  );
};

export default Navbar;
