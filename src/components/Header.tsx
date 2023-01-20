import React from "react";
import { NavLink } from "react-router-dom";
import MenuTrigger from "./simples/MenuTrigger";

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
              <NavLink className="header__navlink" to="about">
                About
              </NavLink>
            </div>
            <div className="header__navigation">
              <NavLink className="header__navlink" to="My Project">
                My project
              </NavLink>
            </div>
            <div className="header__navigation">
              <NavLink className="header__navlink" to="cv">
                CV
              </NavLink>
            </div>
            <MenuTrigger />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
