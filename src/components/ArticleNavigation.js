import React from 'react';
import {Link} from 'react-router-dom'
import Emoji from './Emoji'

function ArticleNavigation({lastArticle, nextArticle}) {
  const next = "/project/" + nextArticle;
  const last = "/project/" + lastArticle;
  return ([
    <div className="outer-article-navigation d-flex">
      <div className="inner-article-navigation m-auto row text-center justify-content-center">
        <Link to="/" className="col-md-auto tn"><Emoji emoji="🏠" desc="house"/> home <Emoji emoji="🏠" desc="house"/></Link>
        <div className="col-auto p-0 d-none d-md-inline">|</div>
        <Link to="/o" className="col-md-auto tn"><Emoji emoji="🗂" desc="files"/> projects <Emoji emoji="🗂" desc="files"/></Link>
        <div className="col-auto p-0 d-none d-md-inline">|</div>
        <Link to={next} className="col-md-auto tn">→ next →</Link>
        <div className="col-auto p-0 d-none d-md-inline">|</div>
        <Link to={last} className="col-md-auto tn">← last ←</Link>
      </div>
    </div>
  ])
}

export default ArticleNavigation
