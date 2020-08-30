import React from 'react';
import ProjectBox from './ProjectBox'

// <p onClick={toggleOverlay}> test</p>
// the bubble should also be a component

function Overlay({display, toggleOverlay}) {
  return ([
    <div className="overlay project-box-container" style={{display: display}}>
      <div className="x clickable" onClick={toggleOverlay}><p className="m-0">x</p></div>
      <div className="inner-project-box-container container my-auto">
        <div className="row">
          <ProjectBox emoji="📈" projectID="1" title="User Personas" description="Using Python + machine learning to extract knowledge from 650,000 data points" />
          <ProjectBox emoji="🅴" projectID="2" title="eProjects" description="Leading a team of 15 for UBC’s largest entrepreneurship club’s best year"/>
        </div>
        <div className="row">
          <ProjectBox emoji="🏅" projectID="3" title="Certificates" description="Leading the research and development of Tandem’s most successful and profitable feature ever"/>
          <ProjectBox emoji="🇨🇴" projectID="4" title="VICO" description="Graduating from Canadian business school and starting as a Spanish speaking software engineer"/>
        </div>
      </div>
    </div>
  ])
}

export default Overlay
