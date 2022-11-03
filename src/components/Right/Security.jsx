import React from 'react'
import './Security.css'

function Security(props) {
  return(
    <div className="securityBar">
      <h3>Security</h3>
      <p>Username: {props.userName}</p>
      <p>Last Login: {JSON.stringify(props.lastLogin)}</p>
      <p>API Key: {props.apiKey}</p>
    </div>
  )
}

export default Security