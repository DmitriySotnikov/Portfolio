import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__wraper">
        <div className="header__inner">
          <div className="header__logo">
            <span className="header__logo-name">Dmitry</span>
            <span className="header__logo-name">Sotnikov</span>
          </div>
          <div className="header__navlinks-block">
            <div className="header__navigation">
              <NavLink className="header__navlink" to="">
                About
              </NavLink>
            </div>
            <div className="header__navigation">
              <NavLink className="header__navlink" to="">
                My project
              </NavLink>
            </div>
            <div className="header__navigation">
              <NavLink className="header__navlink" to="">
                CV
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
