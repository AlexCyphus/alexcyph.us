import React from 'react';
import {Link} from "react-router-dom"
import ProjectBox from "../components/ProjectBox"

function Home() {
  return ([
    <div >
      <Link to="/" style={{ textDecoration: 'none', color: "black"}}>
        <ProjectBox emoji="hi" description="ho" title="hello"/>
      </Link>
    </div>
  ])
}

export default Home
