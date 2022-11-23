import React from 'react'
import "./Loading.css";
import earth from "../../img/Terran.png";
const Loading = () => {
  return (
    <div className='loading'>
      <img src={earth} id="earth" alt="Loader" />
      <h3>Finding Your Place...</h3>
    </div>
  )
}

export default Loading
