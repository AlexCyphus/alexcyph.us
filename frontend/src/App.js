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

const ScrollPopup = ({display}) => {
  return (
    <div className={`scroll-popup-outer ${display ? "d-none" : 'd-none d-lg-flex'}`}>
      <h3>⬇️ Scroll ⬇️</h3>
    </div>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      frame: 1,
      scroll: true
    }
    this.projectScrollHandler = (e) => {
      if (e.target.scrollTop > this.state.scroll){
        this.setState({scroll: e.target.scrollTop})
      }
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
    let background = "background"
    let blob2 = "blob-2"
    
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
            <a target="_blank" href="https://www.linkedin.com/in/alexcyphus/" className="article-link white-link mr-lg-5 mr-2 px-3">linkedin</a>
            <a target="_blank" href="https://github.com/alexcyphus" className="article-link white-link mr-lg-5 mr-2 px-3">github</a>
            <a target="_blank" href="mailto:alexjcyphus@gmail.com" className="article-link white-link px-3">email</a>
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
                <div className="project-box-container row" onScroll={this.projectScrollHandler}>
                  <ScrollPopup display={this.state.scroll == 0 || this.state.scroll > 5}/>
                  <div className="col-md-6">
                    <ProjectBox emoji="📈" projectID="1" title="User Personas" description="Using Python + machine learning to develop user personas from ~1M data points" />
                    <ProjectBox emoji="🇨🇴" projectID="4" title="VICO" description="Graduating from Canadian business school and starting as a Spanish speaking software engineer"/>
                    <ProjectBox link={"https://github.com/AlexCyphus/tandem-experiments"} emoji="🕸" projectID="2" title="Tandem Webviews" description="Creating a reusable component library to create realistic in-app prototypes"/>
                    <ProjectBox emoji="🅴" link={"https://www.ubceprojects.com/"} title="eProjects" description="Leading a team of 15 for UBC’s largest entrepreneurship club’s best year"/>
                  </div>
                  <div className="col-md-6">
                    <ProjectBox emoji="🕗" link={"https://chrome.google.com/webstore/detail/ameyo-task-%20-habit-tracke/bocdgdckommbhbffgloaoefepalhiplh"} projectID="" title="Ameyo" description="My Chrome Extension (unsuccessfully) competing with Trello, Jira, and Momentum all at once"/>
                    <ProjectBox emoji="👨‍💻" projectID="5" title="alexcyph.us" description="Designing and developing my second personal website in Figma → Reactstrap"/>
                    <ProjectBox link={"https://www.tandem.net/certificates"} emoji="🥇" projectID="2" title="Tandem Certificates" description="Product Manage-ing the development and revenue optimization of Tandem Certificates"/>
                    <ProjectBox emoji="💬" projectID="6" title="Language Learning" description="My favorite language learning resources"/>
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
