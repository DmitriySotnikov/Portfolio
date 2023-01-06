import * as React from "react";
import "../styles/main.scss"
import logo from "../static/img/webpack.png"

function App({}) {
 return (
     <div>
         <h1>Главная страница будущего приложения</h1>
         <img className="img" src={logo}/>
     </div>
 )
}

export default App as React.FC;