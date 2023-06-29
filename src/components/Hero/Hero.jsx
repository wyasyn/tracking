import React from 'react'
import { images } from "../../constants"

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="col-1">
        <div className="sub-head">
          <p>New</p><p> Monograph Dashboard</p>
        </div>
        <h1>Powerful insights into your team</h1>
        <p>Project planning and time tracking for agile teams</p>
        <div className="cta">
          <button>Schedule a demo</button>
          <button>to see a live preview</button>
        </div>
      </div>
      <div className="col-2">
        <img src={images.hero} alt="" />
      </div>
    </div>
  )
}

export default Hero