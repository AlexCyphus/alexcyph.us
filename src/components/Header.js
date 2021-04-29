import React from 'react';
import {Link} from 'react-router-dom'

function Header({frame, iterateFrame, specId}) {
  let frameNum = "/images/frame-" + frame + ".png"
  return ([
    <div className="inner-header m-auto d-flex justify-content-center">
      <img id={specId} src={frameNum} className="header-image"></img>
    </div>
  ])
}

export default Header