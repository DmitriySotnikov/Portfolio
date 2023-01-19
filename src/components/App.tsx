import React from "react";
import "../styles/main.scss";
import Layout from "./Layout";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />
      <Layout />
    </div>
  );
}

export default App as React.FC;
