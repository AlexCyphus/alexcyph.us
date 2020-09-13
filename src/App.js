import React, {Component} from 'react';
import './App.css';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Actions from './components/Actions.js';
import Overlay from './components/Overlay.js';
import { BrowserRouter as Router } from "react-router-dom"
import Home from "./pages/Home"
import Emoji from "./components/Emoji"
import Card from "./components/Card"


class App extends Component {
  constructor(props) {
    super(props)
    this.toggleOverlay = this.toggleOverlay.bind(this);
    this.toggleCard = this.toggleCard.bind(this);
    const showOverlay = this.props.match.path;
    if (showOverlay === "/o") {
      this.state = {overlay: true, card: false, frame: 2}
    }
    else {
      this.state = {overlay: false, card: false, frame: 2}
    }
    this.setInterval = setInterval(() => {
      if (this.state.frame) {
        if (this.state.frame < 4) {
          this.setState({frame: this.state.frame + 1})
        }
        else {this.setState({frame: 1})}
      }
    }, 350)
  }
  toggleOverlay() {
    this.setState({overlay: !this.state.overlay});
  }

  toggleCard() {
    this.setState({card: !this.state.card});
    console.log(this.state.card)
  }

  iterateFrame(){
    if (this.state.frame) {
      if (this.state.frame < 4){
        this.setState({frame: this.state.frame + 1})
      }
      else {
        this.setState({frame: 1})
      }
    }
    else {
      this.setState({frame: 1})
    }

  }



  render() {

    return (
    <div>
      <Card display={this.state.card ? 'flex' : 'none'} toggleCard={this.toggleCard}/>
      <div className="app text-center">
        <Overlay display={this.state.overlay ? 'flex' : 'none'} toggleOverlay={this.toggleOverlay}/>
        <Router exact path="/home" component={Home}/>
        <div style={{display: this.state.overlay ? "none" : "block"}}>
          <div className="outer-header d-flex brd">
            <Header frame={this.state.frame} iterateFrame={this.iterateFrame}/>
          </div>
          <div className="outer-content d-flex brd">
            <div className="inner-content text-left">
              <div>
                <p> hey there <Emoji emoji="👋" desc="waving"/> i’m alex </p>
                <p> i’m a <Emoji emoji="🇬🇧" desc="british-flag"/> british / <Emoji emoji="🇨🇦" desc="canadian-flag"/> canadian currently living in berlin working @ tandem as a product manager </p>
                <p> i previously worked at a 500 startups startup in colombia as a software engineer and interned in spain and canada</p>
                <p> i speak english <Emoji emoji="🇨🇦" desc="canadian-flag"/> + spanish <Emoji emoji="🇨🇴" desc="colombian-flag"/>, am learning german <Emoji emoji="🇩🇪" desc="german-flag"/>, and want to learn portuguese <Emoji emoji="🇧🇷" desc="brazilian-flag"/> next </p>
                <p className="m-0"> always interested to meet interesting new people and discuss interesting new things</p>
              </div>
            </div>
          </div>
          <div className="outer-actions d-flex brd">
            <Actions toggleOverlay={this.toggleOverlay} toggleCard={this.toggleCard} resume="hello"/>
          </div>
          <div className="outer-footer d-flex">
            <Footer/>
          </div>
        </div>
      </div>
    </div>
  );
  }
}

export default App;
