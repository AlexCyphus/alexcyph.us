import React from 'react';

function Actions({toggleOverlay}) {
  return ([
    <div className="inner-actions m-auto container">
      <div className="row">
        <div className="col-sm-4 m-0 action"><p className="m-0">📄 résumé 📄</p></div>
        <div className="col-sm-4 m-0 clickable action" onClick={toggleOverlay}><p className="m-0">🗂️ projects 🗂️</p></div>
        <div className="col-sm-4 m-0 action"><p className="m-0">👋 about me 👋</p></div>
      </div>
    </div>
  ])
}

export default Actions
