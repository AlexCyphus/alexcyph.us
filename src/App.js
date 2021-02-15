import React, {Component} from 'react';
import './App.scss';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Actions from './components/Actions.js';
import Overlay from './components/Overlay.js';
import { BrowserRouter as Router } from "react-router-dom"
import Home from "./pages/Home"
import Emoji from "./components/Emoji"
import Card from "./components/Card"
import ProjectBox from './components/ProjectBox'

// being kept awake by Kaffeine https://kaffeine.herokuapp.com/

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
    let background = !this.state.overlay ? "background" : "background-0"
    let blob2 = !this.state.overlay ? "blob-2" : "d-none"
    
    return (
    <div class="d-flex">
      <div className="blobholder">
        <div id="blob-1" class="blob"></div>
        <div id={blob2} class="blob"></div>
      </div>
      <div className="app m-auto">
          <div className="outer-header d-flex brd">
            <Header frame={this.state.frame} iterateFrame={this.iterateFrame}/>
          </div>
          <div className="d-flex justify-content-center pb-3">
            <p className="article-link white-link mr-lg-5 mr-2 px-3">linkedin</p>
            <p className="article-link white-link mr-lg-5 mr-2 px-3">github</p>
            <p className="article-link white-link px-3">email</p>
          </div>
          <div className="outer-container d-flex brd row">
            <div className="inner-content-container col-lg-6 text">
              <div className="d-flex main-text-outer">
                <div className="main-text-container m-auto">
                  <p>>> hey there i’m alex <Emoji emoji="👋" desc="waving"/></p>
                  <p>>> i’m a <Emoji emoji="🇬🇧" desc="british-flag"/> british / <Emoji emoji="🇨🇦" desc="canadian-flag"/> canadian living in berlin</p>
                  <p>>> currently working as a product manager at <a href="http://www.tandem.net" target="_blank" className="article-link">tandem</a> and developing <a href="https://chrome.google.com/webstore/detail/ameyo/bocdgdckommbhbffgloaoefepalhiplh" className="article-link">ameyo</a></p>
                  <p>>> interested in languages (<Emoji emoji="🇨🇦" desc="canadian-flag"/>/<Emoji emoji="🇨🇴" desc="colombian-flag"/>/<Emoji emoji="🇩🇪" desc="german-flag"/>), economics, productivity, startups, product management, and frontend development</p>
                </div>
              </div>
            </div>
            <div className="inner-content-container col-lg-6 container">
                <div className="project-box-container row">
                  <div className="col-md-6">
                    <ProjectBox emoji="📈" projectID="1" title="User Personas" description="Using Python + machine learning to extract knowledge from ~1M data points" />
                    <ProjectBox emoji="🇨🇴" projectID="4" title="VICO" description="Graduating from Canadian business school and starting as a Spanish speaking software engineer"/>
                    <ProjectBox emoji="🕸" projectID="2" title="Tandem Webviews" description="Creating a reusable component library to create realistic webview prototypes"/>
                  </div>
                  <div className="col-md-6">
                  <ProjectBox emoji="🕗" projectID="" title="Ameyo" description="My Chrome Extension (unsuccessfully) competing with Trello, Jira, and Momentum all at once"/>
                    <ProjectBox emoji="👨‍💻" projectID="5" title="alexcyph.us" description="Designing and developing my second personal website in Figma → Reactstrap"/>
                    <ProjectBox emoji="🥇" projectID="2" title="Tandem Certificates" description="Developing Tandem's biggest new feature in years"/>
                    <ProjectBox emoji="🅴" projectID="2" title="eProjects" description="Leading a team of 15 for UBC’s largest entrepreneurship club’s best year"/>
                  </div>

                </div>
              </div>
          </div>
      </div>
    </div>
  );
  }
}

export default App;
