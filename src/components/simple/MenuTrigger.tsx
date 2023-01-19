import React, { useRef, useState } from "react";

// interface IProps {isActive: boolean;} { isActive }: IProps

function MenuTrigger() {
  const ref = useRef(null);
  const [trigger, setTrigger] = useState<boolean>(false);
  const triggerHandler = () => setTrigger(!trigger);
  const keyHandler = (event: React.KeyboardEvent<HTMLSpanElement>) => {
    const { key } = event;
    if (key === "Enter") {
      setTrigger(!trigger);
    }
  };
  return (
    <div>
      <span
        className={trigger ? "trigger trigger--active" : "trigger"}
        onClick={() => triggerHandler()}
        ref={ref}
        role="menu"
        tabIndex={0}
        onKeyDown={(event) => keyHandler(event)}
      >
        <div className={trigger ? "trigger__icon trigger__icon--active" : "trigger__icon"}>
          <div className={trigger ? "trigger__icon-line trigger-icon-line--active" : "trigger__icon-line"} />
        </div>
        <div className={trigger ? "trigger__text trigger__text--active" : "trigger__text"}>Menu</div>
      </span>
    </div>
  );
}

export default MenuTrigger as React.FC;
