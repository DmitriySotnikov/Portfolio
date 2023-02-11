import React from "react";
import Intro from "./blocks/Intro";

function Layout() {
  return (
    <div className="layout">
      <div className="layout__content">
        <Intro />
      </div>
    </div>
  );
}

export default Layout as React.FC;
