import React, { FC, ReactNode, useState } from "react";
import { NavLink } from "react-router-dom";
import Items from "../../constans/slider-menu-items";

function SliderMenu() {
  const [active, setActive] = useState<boolean>(true);
  return (
    <div className={active ? "slider-menu slider-menu--active" : "slider-menu"}>
      <div className="slider-menu__inner">
        {
          Items.map((el) => (
            <div className="slider-menu__item" key={el.id}>
              <NavLink className="slider-menu__link" to={el.link}>
                {el.name}
              </NavLink>
            </div>
          )) as ReactNode
        }
      </div>
    </div>
  );
}

export default SliderMenu as FC;
