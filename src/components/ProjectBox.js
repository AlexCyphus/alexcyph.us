import React from 'react';
import {Link} from 'react-router-dom'
import Emoji from './Emoji.js';

const UrlWrapper = ({children, link}) => {
  return (
    <a href={link} target="_BLANK" className="col-lg-6 outer-project-box" style={{ textDecoration: 'none', color: 'black'}}>
      {children}
    </a>
  )
}

const LinkWrapper = ({children, projectID}) => {
  return (
  <Link 
    to={{pathname:'/project/'+projectID}} 
    className="col-lg-6 outer-project-box" 
    style={{ textDecoration: 'none', color: 'black'}}
  >
    {children}
  </Link>
  )
}

const MainContent = ({emoji, title, description}) => {
  return (
    <div className="outer-project-box d-flex">
      <div className="inner-project-box m-auto">
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
    </div>
  )
}

function ProjectBox({link, emoji, title, description, projectID}) {

  return link 
    ? <UrlWrapper link={link}><MainContent emoji={emoji} title={title} description={description}/></UrlWrapper>
    : <LinkWrapper projectID={projectID}><MainContent emoji={emoji} title={title} description={description}/></LinkWrapper>
}

export default ProjectBox
