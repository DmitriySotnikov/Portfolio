import React from "react";
import "../styles/main.scss";
import Layout from "./Layout";
import Header from "./Header";
import MenuTrigger from "./simple/MenuTrigger";

function App() {
  return (
    <div className="app">
      <Header />
      <MenuTrigger />
      <Layout />
    </div>
  );
}

export default App as React.FC;
