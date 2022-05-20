import React from 'react'
import { useEffect, useState } from 'react'
import "./Clock.css"
const Clock = () => {
    const [time,setTime] = useState() 
    
const timeFunction = () =>{
    let date = new Date();
        let hours = date.getHours();
        let minutes = ('0'+date.getMinutes()).slice(-2);
        const currentTime = `${(hours % 12) || 12}:${minutes}` ;
        setTime(currentTime);
}
      
      const greeting =() =>{
          
      }
useEffect(() =>{
    timeFunction()
})
console.log("Cds")
  return (
    <div className="clock flex-centered fle-col">
        <div className="clock-time">
            {time}
        </div>
        <div className="greeting">
            <div></div>
        </div>
    </div>
  )
}

export {Clock}