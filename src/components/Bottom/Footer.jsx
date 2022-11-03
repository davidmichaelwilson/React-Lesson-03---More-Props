import React from 'react'
import './Footer.css'

function Footer(props) {
  return(
    <footer>
      <p>Current time: {JSON.stringify(props.currentTime)}</p>
      
      <p>Your next event is {props.eventName} starting on {JSON.stringify(props.eventTime)}</p>
    </footer>
  )
}

export default Footer