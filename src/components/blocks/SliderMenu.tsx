import React, { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { useAppSelector} from "../../hooks/storeHooks"
import Items from "../../constans/slider-menu-items";

function SliderMenu() {
  // The `state` arg is correctly typed as `RootState` already
  const isOpen = useAppSelector((state) => state.interface.isOpen)

  return (
    <div className={isOpen ? "slider-menu slider-menu--active" : "slider-menu"}>
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
