import React, { useState } from "react";
import { Link } from "@reach/router";

import "./layout.scss";
import logo from "../../assets/logo.svg";
import menu from "../../assets/menu.svg";

const isPartiallyActive = ({ isPartiallyCurrent }) => {
  return isPartiallyCurrent ? { className: "active" } : {};
};
const isActive = ({ isCurrent }) => {
  return isCurrent ? { className: "active" } : {};
};

export default ({ children }) => {
  const [menuState, setMenuState] = useState(false);
  const toggleMenu = () => setMenuState(!menuState);

  const Menu = menuState ? (
    <ul className="menu">
      <Link getProps={isActive} to="/">
        <li>Home</li>
      </Link>
      <Link getProps={isPartiallyActive} to="/events">
        <li>Events</li>
      </Link>
    </ul>
  ) : null;
  return (
    <div className="layout">
      <nav>
        <div className="topbar">
          <Link to="/">
            <img className="logo" src={logo} alt="GeekNight Logo" />
          </Link>
          <div className="menu-toggle" onClick={toggleMenu}>
            <span>
              <b>Menu</b>
            </span>
            <img src={menu} alt="Menu icon" />
          </div>
        </div>
        {Menu}
      </nav>
      {children}
    </div>
  );
};
