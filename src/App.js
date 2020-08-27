import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Actions from './components/Actions.js';
import Overlay from './components/Overlay.js';
import { BrowserRouter as Router } from "react-router-dom"
import Home from "./pages/Home"


class App extends Component {
  constructor(props) {
    super(props)
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.state = {
      overlay: true,
    }
  }
  toggleOverlay() {
    this.setState({overlay: !this.state.overlay});
    console.log(this.state.overlay)
  }
  render() {
    return (
    <div className="app text-center">
    <Router exact path="/home" component={Home}/>
    <Overlay display={this.state.overlay ? 'flex' : 'none'} toggleOverlay={this.toggleOverlay}/>
    <div style={{display: this.state.overlay ? "none" : "block"}}>
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
        <Actions toggleOverlay={this.toggleOverlay} resume="hello"/>
      </div>
      <div className="outer-footer d-flex">
        <Footer/>
      </div>
    </div>
  </div>
  );
}
}

export default App;
