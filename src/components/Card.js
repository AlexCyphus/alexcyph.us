import React from 'react';
import Emoji from './Emoji';

function Card({toggleCard, display}) {
  return ([
    <div className="outer-card" style={{display: display}}>
      <div className="m-auto row inner-card d-flex container drop-shadow-black">
      <div id="close-card-row col-12" className="clickable tn-2" style={{position: "absolute"}}>
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
                <p className="biz-card-link"><Emoji emoji="📍" desc="pin"/> berlin, germany</p>
                <a className="tn-2" target="_blank" rel="noopener noreferrer" href="http://www.alexcyph.us"><p className="clickable biz-card-link pushed-in"><Emoji emoji="🌏" desc="planet"/> alexcyph.us</p></a>
                <a className="tn-2" target="_blank" rel="noopener noreferrer" href="mailto:alexjcyphus@gmail.com"><p className="clickable biz-card-link pushed-in"><Emoji emoji="📩" desc="email"/> alexjcyphus@gmail.com</p></a>
                <a className="tn-2" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alexcyphus/"><p className="clickable biz-card-link"><Emoji emoji="💼" desc="briefcase"/> linkedin.com/in/alexcyphus</p></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="black-background" onClick={toggleCard}></div>
    </div>
  ])
}

export default Card
