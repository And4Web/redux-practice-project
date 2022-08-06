import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Search from "../search/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

function Header() {
  const [user, setUser] = useState(true);
  return (
    <div className="header">
      <nav className="navbar">
        <div className="navbar-left">
          <span className="site-logo">SampleSite</span>
          <div className="menu-items">
            <Link to="" className="menu-item">
              Home
            </Link>
            <Link to="" className="menu-item">
              About
            </Link>
            <Link to="" className="menu-item">
              Services
            </Link>
            <Link to="" className="menu-item">
              Contact
            </Link>
          </div>
        </div>
        <Search placeholder="Search products" className="search-bar" />
        <div className="navbar-right">
          {user ? (
            <div className="user-profile">
              <img
                src="https://www.dmarge.com/wp-content/uploads/2021/01/dwayne-the-rock-.jpg"
                alt="user"
              />
              <p>Anand</p>
              <ArrowDropDownIcon />
            </div>
          ) : (
            <button type="button">Sign in</button>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Header;
