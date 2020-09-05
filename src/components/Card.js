import React from 'react';
import Emoji from './Emoji';

function Card({toggleCard, display}) {
  return ([
    <div className="outer-card" style={{display: display}} onClick={toggleCard}>
    <div className="m-auto row inner-card d-flex">
      <div className="inner-inner-card m-auto">
        <p className="close-card" onClick={toggleCard}>x</p>
      </div>
    </div>
    <div className="black-background"></div>
    </div>
  ])
}

export default Card
