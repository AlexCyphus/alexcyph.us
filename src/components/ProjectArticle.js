import React from 'react';
import ArticleNavigation from './ArticleNavigation'
import ArticleContent from './ArticleContent'
import Header from './Header.js';
import Emoji from './Emoji.js';

function ProjectArticle({match, description, location}) {

  const projectID = match.params.projectID;

  var title = ""
  var desc = ""
  var emoji = ""

  // Had problems with passing props so just switch statement for basic details
  switch(parseInt(projectID)){
    case 1:
      title = 'User Personas';
      desc = 'Using Python + machine learning to extract knowledge from 650,000 data points'
      emoji = '📈'
      break;
    case 2:
      title = 'eProjects'
      desc = 'Leading a team of 15 for UBC’s largest entrepreneurship club’s best year'
      emoji = '🅴'
      break;
    case 3:
      title = 'Certificates'
      desc = 'Leading the research and development of Tandem’s most successful and profitable feature ever'
      emoji = '🏅'
      break;
    case 4:
      title = 'VICO'
      desc = 'Graduating from Canadian business school and starting as a Spanish speaking software engineer'
      emoji = "🇨🇴"
      break;
    case 5:
      title = 'alexcyph.us'
      desc = "Designing and developing my second personal website in Figma → Reactstrap"
      emoji = "👨‍💻"
      break;
    default:
      break
  }

  var next = parseInt(projectID) + 1
  var last = parseInt(projectID) - 1

  if (next === 6){next = 1}
  if (last === 0){last = 5}

  return ([
    <div className="app">
      <Header link="/"/>
      <div>
      <p className="article-header text-center brd"><Emoji emoji={emoji} desc="emoji"/> {title} <Emoji emoji={emoji} desc="emoji"/></p>
      <p className="article-description brd text-center">{desc}</p>
      </div>
      <ArticleContent projectID={projectID} className="brd"/>
      <ArticleNavigation nextArticle={next} lastArticle={last}/>
    </div>
  ])

}

export default ProjectArticle
