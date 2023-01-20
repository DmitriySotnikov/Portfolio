import React, { FC } from "react";
import { NavLink } from "react-router-dom";

function SliderMenu() {
  return (
    <div className="slider-menu">
      <div className="slider-menu__inner">
        <div className="slider-menu__item">
          <NavLink className="slider-menu__link" to="about">
            about
          </NavLink>
        </div>
        <div className="slider-menu__item">
          <NavLink className="slider-menu__link" to="myproject">
            my project
          </NavLink>
        </div>
        <div className="slider-menu__item">
          <NavLink className="slider-menu__link" to="cv">
            cv
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default SliderMenu as FC;
