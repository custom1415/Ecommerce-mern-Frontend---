import React from 'react'
import './loader.css'

const Loader = () => {
  return (
    <div className="grid w-full h-screen place-items-center ">
      <div className="loader">
        <div className="loader-bar"></div>
        <div className="loader-bar"></div>
        <div className="loader-bar"></div>
        <div className="loader-bar"></div>
      </div>
    </div>
  )
}

export default Loader
