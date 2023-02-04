import React, { useRef } from "react";
import { useAppSelector, useAppDispatch} from "../../hooks/storeHooks"
import {open} from "../../store/slices/interfaceSlice"

function MenuTrigger() {
  const ref = useRef(null);
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector((state) => state.interface.isOpen)
  const triggerHandler = () => dispatch(open(!isOpen));
  const keyHandler = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    const { key } = event;
    if (key === "Enter") {
      dispatch(open(!isOpen));
    }
  };
  return (
    <div>
      <span
        className={isOpen ? "trigger trigger--active" : "trigger"}
        onClick={() => triggerHandler()}
        ref={ref}
        role="menu"
        tabIndex={0}
        onKeyDown={(event) => keyHandler(event)}
      >
        <div className={isOpen ? "trigger__icon trigger__icon--active" : "trigger__icon"}>
          <div className={isOpen ? "trigger__icon-line trigger__icon-line--active" : "trigger__icon-line"} />
        </div>
      </span>
    </div>
  );
}

export default MenuTrigger as React.FC;
