import "./App.css";
import { UserOnBoard,Main } from "./screens/index";
import {bg1} from "./Assets/index"
import { useState } from "react";

function App() {
const[userName,setUserName] = useState("")
const[route,setRoute] = useState("onboard")
  return <div style = {{background: `url(${bg1}) center center/cover no-repeat`}} className="App" >
     { route === "onboard" && <UserOnBoard userName ={userName} setUserName ={setUserName} setRoute={setRoute}/>}
     { route === "main" && <Main/>}
  </div>;
}

export default App;
