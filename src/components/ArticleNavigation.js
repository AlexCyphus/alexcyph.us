import React from 'react';
import {Link} from 'react-router-dom'

function ArticleNavigation({lastArticle, nextArticle}) {
  const next = "/project/" + nextArticle;
  const last = "/project/" + lastArticle;
  return ([
    <div className="outer-article-navigation d-flex">
      <div className="inner-article-navigation m-auto row text-center justify-content-center">
        <Link to="/" className="col-auto tn">🏠 home</Link>
        <div className="col-auto p-0">|</div>
        <Link to="/o" className="col-auto tn">🗂 all projects</Link>
        <div className="col-auto p-0">|</div>
        <Link to={next} className="col-auto tn">→ next </Link>
        <div className="col-auto p-0">|</div>
        <Link to={last} className="col-auto tn">← last</Link>
      </div>
    </div>
  ])
}

export default ArticleNavigation
