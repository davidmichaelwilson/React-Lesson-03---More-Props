import React from 'react'
import './RepoInfo.css'

function RepoInfo(props) {
console.log("activeRepo", props.activeRepo)
  
  return(
    <div>
      {/* Show only the info for the repo where 'active === true' */}
      <h2>Repo name: {props.activeRepo.name}</h2>
      <p>Last modified: {JSON.stringify(props.activeRepo.lastModified)}</p>
      <p>Language: {props.activeRepo.language}</p>
      
      <p>Collaborators: </p>
      <ul>
        {/* Add collaborators as list items using JS */}
        {props.activeRepo.collaborators.map( item => <li>{item}</li> ) }


      </ul>
      <textarea placeholder="Start coding!">
      </textarea>
    </div>
  )
}

export default RepoInfo