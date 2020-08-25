import React from 'react';

function Overlay({emoji, title, description}) {
  return ([
    <div className="col-md-6 outer-project-box">
      <div className="inner-project-box">
        <div className="project-box-header">
          <p className="emoji">{emoji}</p>
          <p className="project-title">{title}</p>
        </div>
        <div className="project-box-content">
          <div className="m-auto">
          <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
])
}

export default Overlay
