import React from 'react';
import {Link} from 'react-router-dom'

function ProjectBox({emoji, title, description, projectID}) {
  return ([
      <Link to={{pathname:'/project/'+projectID, state: {title: title, description: description, emoji: emoji}}} description={description} title={title} className="col-md-6 outer-project-box" style={{ textDecoration: 'none', color: 'black'}}>
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
      </Link>
])
}

export default ProjectBox
