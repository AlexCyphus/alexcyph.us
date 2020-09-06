import React from 'react';
import Emoji from './Emoji';

function Card({toggleCard, display}) {
  return ([
    <div className="outer-card" style={{display: display}} onClick={toggleCard}>
      <div className="m-auto row inner-card d-flex container drop-shadow-black">
      <div id="close-card-row col-12" style={{position: "absolute"}}>
        <p id="close-card" className="col-auto" onClick={toggleCard}>x</p>
      </div>
        <div className="inner-inner-card row d-flex m-auto">

          <div className="container m-auto mx-5">
            <div className="row margin-auto">
              <div className="col-auto m-auto" id="my-face-container">
                <img src="/my-face.png" id="my-face"></img>
              </div>
              <div className="col-auto m-auto" id="links">
                <p id="my-name">alex (john) cyphus</p>
                <p className="biz-card-link">📍 berlin, germany</p>
                <p className="biz-card-link pushed-in">🌏 alexcyph.us</p>
                <p className="biz-card-link pushed-in">📩 alexjcyphus@gmail.com</p>
                <p className="biz-card-link">💼 linkedin.com/in/alexcyphus</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="black-background"></div>
    </div>
  ])
}

export default Card
