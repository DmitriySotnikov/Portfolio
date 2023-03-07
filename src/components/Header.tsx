import React from "react";
import { NavLink } from "react-router-dom";
import Items from "../constans/slider-menu-items";
import MenuTrigger from "./simples/MenuTrigger";

function Header() {
  const active = "About"
  return (
    <div className="header">
      <div className="header__wraper">
        <div className="header__inner">
          <div className="header__logo">
            <span className="header__logo-name">: D</span>
            <span className="header__logo-name"> </span>
          </div>
          <div className="header__navlinks-block">
            {Items.map((el) => (
              <div className="header__navigation" key={el.id}>
                <NavLink className={active===el.name?"header__navlink header__navlink--active":"header__navlink"} to={el.link}>
                  {el.name}
                </NavLink>
              </div>
            ))}
            <MenuTrigger />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header as React.FC;
