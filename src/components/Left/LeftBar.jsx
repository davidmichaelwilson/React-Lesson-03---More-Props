import React from 'react'
import './LeftBar.css'
import RepoBar from './RepoBar'

function LeftBar(props) {
  return(
    <div className="main">
    
    {/* Modify the code below to use some kind of loop */}
    {/* using the RepoBar component (pass props to it) */}
    {/* Your LeftBar should end up looking like what's */}
    {/* rendered from the code below: */}
      
      <RepoBar repoName={props.repos[0].name} modified={props.repos[0].lastModified} />
      <RepoBar repoName={props.repos[1].name} modified={props.repos[1].lastModified} />
            <RepoBar repoName={props.repos[2].name} modified={props.repos[2].lastModified} />

{/*      {props.repos.map( (item) => <RepoBar repoName={item.name} modified={item.lastModified} /> )} 
*/}
      
    </div>
  )
}

export default LeftBar