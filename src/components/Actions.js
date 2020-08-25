import React from 'react';
import App from '../App.js';

function Actions({toggleOverlay}) {
  return ([
    <div className="inner-actions m-auto container">
      <div className="row">
        <div className="col-md-4 m-0"><p className="m-0">📄 résumé 📄</p></div>
        <div className="col-md-4 m-0 clickable" onClick={toggleOverlay}><p className="m-0">🗂️ projects 🗂️</p></div>
        <div className="col-md-4 m-0"><p className="m-0">👋 about me 👋</p></div>
      </div>
    </div>
  ])
}

export default Actions
