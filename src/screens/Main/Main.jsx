import React from 'react'
import "./Main.css"
import {Clock,Quote,Weather} from "../../Components/index"
const Main = () => {
  return (
    <div className="main">
      <Weather/>
      <Clock/>
      <Quote/>
    </div>
  )
}

export {Main}