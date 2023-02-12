import React from 'react'
import {useNavigate} from "react-router-dom"

import "./home-page.css"
function HomePage() {
  const navigate =  useNavigate();
  return (
    <div className='home-page'>
    <h3>Welcome to Visualisation through Graphs</h3>
    <div className='btn-group-home'>
      <button id="start-btn" onClick={()=>navigate("/static-graphs")}>Start</button>
    </div>
   </div>
  )
}

export default HomePage