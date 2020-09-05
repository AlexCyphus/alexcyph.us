import Emoji from './Emoji'
import React from 'react';

function Actions({toggleOverlay, toggleCard}) {
  return ([
    <div className="inner-actions m-auto container">
      <div className="row">
        <div className="col-sm-6 m-0 clickable action" onClick={toggleOverlay}><p className="m-0"><Emoji emoji="🗂️" desc="files"/> projects <Emoji emoji="🗂️" desc="files"/></p></div>
        <div className="col-sm-6 m-0 action" onClick={toggleCard}><p className="m-0"><Emoji emoji="👋" desc="waving"/> contact me <Emoji emoji="👋" desc="waving"/></p></div>
      </div>
    </div>
  ])
}

export default Actions
