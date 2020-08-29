import React from 'react';
import {Link} from 'react-router-dom'

function Header({display, link}) {
  return ([
    <Link to={link} style={{ textDecoration: 'none', color: "black"}} className="outer-header d-flex brd">
      <div className="inner-header m-auto">
        <h1 className="alexcyphus text-center">
          <span className="red">a</span>
          <span className="blue">l</span>
          <span className="purple">e</span>
          <span className="green">x</span>
          <span className="blue">c</span>
          <span className="purple">y</span>
          <span className="green">p</span>
          <span className="red">h</span>
          <span className="sm-font">.</span>
          <span className="yellow">us</span>
        </h1>
        <p className="headings" className={display == "true" ? "d-block" : "d-none"}>
          <span className="red">product manager</span>
          <span> / / </span>
          <span className="blue">language nerd</span>
          <span> / / </span>
          <span className="yellow"> software engineer</span>
        </p>
      </div>
    </Link>
  ])
}

export default Header
