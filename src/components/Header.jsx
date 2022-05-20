import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Search from "../components/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  const [user, setUser] = useState(false);
  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar-left">
          <span className="site-logo">Sample</span>
          <div className="menu-items">
            <Link to="">Home</Link>
            <Link to="">About</Link>
            <Link to="">Services</Link>
            <Link to="">Contact</Link>
          </div>
        </div>
        <Search placeholder="Search products" />
        <div className="navbar-right">
          {user ? (
            <div className="user-profile">
              <img src="" alt="user-display-image" />
              <span>Anand</span>
            </div>
          ) : (
            <button type="button">Sign in</button>
          )}
          <ArrowDropDownIcon />
        </div>
      </nav>
    </div>
  );
}

export default Header;
