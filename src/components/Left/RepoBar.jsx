import React from 'react'
import './RepoBar.css'

function RepoBar(props) {
  return(
    <div className="bar">

      {/* Modify these fields below to use props instead */}
      <h3>{props.repoName}</h3>
      <p>{JSON.stringify(props.modified)}</p>
      
    </div>
  )
}

export default RepoBar