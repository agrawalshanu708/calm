import React from 'react'
import "./Main.css"
import {Clock,Quote} from "../../Components/index"
const Main = () => {
  return (
    <div className="main">
      <Clock/>
      <Quote/>
    </div>
  )
}

export {Main}