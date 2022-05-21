import "./App.css";
import { UserOnBoard,Main } from "./screens/index";
import {bg1} from "./Assets/index"
import { useState } from "react";
import { useBackgroundImage } from './hooks';

function App() {
const[userName,setUserName] = useState("")
const[route,setRoute] = useState("onboard")
const {bgURL} = useBackgroundImage()
  return <div style = {{background: `url(${bgURL}) center center/cover no-repeat`}} className="App" >
     { route === "onboard" && <UserOnBoard userName ={userName} setUserName ={setUserName} setRoute={setRoute}/>}
     { route === "main" && <Main userName ={userName}/>}
  </div>;
}

export default App;
