import React from 'react'
import "./UserOnBoard.css"
const UserOnBoard = ({userName,setUserName,setRoute}) => {

    const userNameHandler=(e)=>{
        e.preventDefault()
        setUserName(e.target.value)
        setRoute("main")
       
    }
  return (
    <div className="onboard">
<form className='UserOnboarding'  onSubmit={(e) => userNameHandler(e)}>
        <h1 className="onboaring-title">Hello, what's your name?</h1>
        <input defaultValue={userName} type="text" className='onboaring-input' autoFocus/>
    </form>
    </div>
  )
}

export {UserOnBoard}