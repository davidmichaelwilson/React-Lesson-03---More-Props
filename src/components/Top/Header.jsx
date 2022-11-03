import React from 'react'
import './Header.css'

function Header(props) {


  function recentlyLogged() {
    // ****** Create a function that returns true 
    // if the user's lastLogin was within the last 
    // 24 hours or false otherwise. ******
    const now = new Date()

    const msBetweenDates = Math.abs(props.logged - now.getTime());
      // convert ms to hours
    const hoursBetweenDates = msBetweenDates / (60*60*1000);

    if (hoursBetweenDates < 24) {
      console.log("date is within 24 hours")
      return true
    } else {
      console.log("date is NOT within 24 hours")
      return false
    }
  }


  return (
    <header>
    
      {/* Edit the line below to use props in place of (Bilbo Baggins) */}
      
      <h2>Hi {props.name}, {recentlyLogged() ? "welcome back!": "we missed you."}</h2>

      
    </header>
  )
}

export default Header