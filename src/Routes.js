import React from 'react';
import App from "./App";
import Home from "./pages/Home";
import {Route} from "react-router-dom"

function Routes() {
  return (
    <div>
      <Route exact path="/" component={App}/>
      <Route exact path="/home" component={Home}/>
    </div>
  )
}

export default Routes
