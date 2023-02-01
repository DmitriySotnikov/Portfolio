import React, { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import Items from "../../constans/slider-menu-items";

function SliderMenu() {
  return (
    <div className="slider-menu">
      <div className="slider-menu__inner">
        {
          Items.map((el) => {
            return;
            <div className="slider-menu__item">
              <NavLink className="slider-menu__link" to={`${el}`}>
                {el}
              </NavLink>
            </div>;
          }) as ReactNode
        }
      </div>
    </div>
  );
}

export default SliderMenu as FC;
