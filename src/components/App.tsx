import React from "react";
import "../styles/main.scss";
import Layout from "./Layout";
import Header from "./Header";
import SliderMenu from "./blocks/SliderMenu";

function App() {
  return (
    <div className="app">
      <Header />
      <SliderMenu />
      <Layout />
    </div>
  );
}

export default App as React.FC;
