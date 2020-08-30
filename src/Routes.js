import React from 'react';
import App from "./App";
import {Route} from "react-router-dom"
import ProjectArticle from './components/ProjectArticle.js';

function Routes() {
  return (
    <div>
      <Route exact path="/" component={App} showOverlay={false}/>
      <Route exact path="/o" component={App} showOverlay={true}/>
      <Route exact path ="/project/:projectID" component={ProjectArticle}/>
    </div>
  )
}

export default Routes
