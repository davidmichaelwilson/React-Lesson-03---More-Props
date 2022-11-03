import React, {useEffect, useState} from 'react';
import Header from "./components/Top/Header"
import LeftBar from './components/Left/LeftBar.jsx'
import RepoInfo from './components/Middle/RepoInfo.jsx'
import Security from './components/Right/Security.jsx'
import Footer from './components/Bottom/Footer.jsx'
import {userData} from './data'
import "./App.css"

function App() {



  console.log(userData)

  return(
    <main>
      <div className="top">
        <Header name={userData.name} logged={userData.lastLogin} />
      </div>
      <div className="left">
        <LeftBar repos={userData.repos} />
      </div>
      <div className="middle">
        <RepoInfo activeRepo={userData.repos.filter(repo => repo.open)[0]} />
      </div>
      <div className="right">
        <Security userName={userData.username} lastLogin={userData.lastLogin} apiKey={userData.apiKey} />
      </div>
      <div className="bottom">
        <Footer currentTime={userData.now} eventName={userData.nextEvent.name} eventTime={userData.nextEvent.time}/>
      </div>
    </main>
  )
}

export default App