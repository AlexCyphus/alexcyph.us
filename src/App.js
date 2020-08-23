import React from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Actions from './components/Actions.js';

function App() {
  return (
    <div className="app text-center">
      <div className="outer-header d-flex brd">
        <Header/>
      </div>
      <div className="outer-content d-flex brd">
        <div className="inner-content text-left">
          <div>
            <p> >> hey there 👋 i’m alex  </p>
            <p> >> i’m a 🇬🇧 british / 🇨🇦 canadian currently living in berlin working @ tandem as a product manager </p>
            <p>>> i previously worked at a 500 startups startup in colombia as a software engineer and interned in spain and canada</p>
            <p>>> i speak english 🇨🇦 + spanish 🇨🇴, am learning german 🇩🇪, and want to learn portuguese 🇧🇷 next </p>
            <p className="m-0">>> always interested to meet interesting new people and discuss interesting new things</p>
          </div>
        </div>
      </div>
      <div className="outer-actions d-flex brd">
        <Actions/>
      </div>
      <div className="outer-footer d-flex">
        <Footer/>
      </div>
    </div>
  );
}

export default App;
