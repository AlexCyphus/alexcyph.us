import React from 'react';
import ArticleNavigation from './ArticleNavigation'
import ArticleContent from './ArticleContent'
import Header from './Header.js';


function ProjectArticle({match, description, location}) {
  const projectID = match.params.projectID;
  const title = location.state.title
  const desc = location.state.description
  const emoji = location.state.emoji
  console.log(location)

  return ([
    <div className="app">
      <Header link="/"/>
      <div>
      <p className="article-header text-center brd">{emoji} {title} {emoji}</p>
      <p className="article-description brd text-center">{desc}</p>
      </div>
      <ArticleContent projectID={projectID} header="hello"/>
      <ArticleNavigation/>
    </div>
  ])

}

export default ProjectArticle
