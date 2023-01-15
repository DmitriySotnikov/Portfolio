import React from "react";
import "../styles/main.scss";
import logo from "../static/img/webpack.png";

function App() {
  return (
    <div className="app">
      <h1>Главная страница будущего приложения</h1>
      <img className="img" alt="Img" src={logo} />
    </div>
  );
}

export default App as React.FC;
