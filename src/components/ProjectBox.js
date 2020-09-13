import React from 'react';
import {Link} from 'react-router-dom'
import Emoji from './Emoji.js';

function ProjectBox({emoji, title, description, projectID}) {
  return ([
      <Link to={{pathname:'/project/'+projectID, state: {title: title, description: description, emoji: emoji}}} description={description} title={title} className="col-lg-6 outer-project-box" style={{ textDecoration: 'none', color: 'black'}}>
        <div className="inner-project-box">
          <div className="project-box-header">
            <p className="emoji"><Emoji emoji={emoji} desc="emoji"/></p>
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
