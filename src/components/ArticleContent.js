import React from 'react';
import ArticleImage from './ArticleImage'
import {Link} from "react-router-dom"
import Emoji from './Emoji'

function ArticleContent({projectID}) {

  // eProjects Page
  if(projectID === '1') {
    return ([
      <div className="article-content">
      <p>Something something something</p>
      <ArticleImage image={"tongue.jpeg"} class="text-center"/>
      </div>
    ])
  }
  // User Personas Content
  if(projectID === '2') {
    return ([
      <div className="">
        userpersonas
      </div>
    ])
  }
  // User Personas Content
  if(projectID === '3') {
    return ([
      <div className="">
        certificates
      </div>
    ])
  }
  // User Personas Content
  if(projectID === '4') {
    return ([
      <div className="article-content brd">
        <p>As the title suggests - I had a minor identity crisis throughout university and decided that the world of high finance <Emoji emoji="📈" desc="chart"/> was not for me and I instead wanted to do something in tech. At the time, I was under the impression that tech companies were software developers and accountants and nothing in between. So over the course of three years, I went from struggling to understand the difference between margins and tabs to making practice projects in JavaScript and competing in a <a className="article-link" href="http://www.lumohacks.com">hackathon</a> (placing a cool 15th place).</p>
        <p>I became mildly obsessed with learning to code and after about a year of learning I put it to the side to learn Spanish while on exchange in Barcelona, Spain (my now favorite city on the planet).  I then quite obsessively studied Spanish, got to low-level-gringo-fluency and came back to Canada to obsess over both Spanish and coding.</p>
        <p>In my last year of university, I felt quite stretched by studying my final year of a finance + economics degree, running <Link to="/project/2" className="article-link tn"> eProjects</Link>, and trying to learn as much about Spanish and web development as I could. So I decided the next logical step would be to graduate, move to a country where very little English is spoken, where I can work hands on as a software engineer. After a quick Google search for my criteria of “cleanest” Spanish, lowest levels of English, highest levels of safety, and tech hubs, I eventually settled on either Lima, Bogota, and Medellín. </p>
        <p>I got a job with <a target="_blank" rel="noopener noreferrer" href="https://getvico.com/" className="article-link">VICO (Viviendas Compartidas)</a> - a marketplace for student/young professional housing in Colombia. The team was around 20 people, and they had just entered into the Latin American version of <a target="_blank" rel="noopener noreferrer" href="https://500.co" className="article-link">500 Startups</a>. I had one interview with one of the founders, we got on very well, and I bought a plane ticket for Colombia the day after my graduation ceremony.</p>
        <p>The first few weeks, I was hitting everyone with “perdón no entendí”s, speaking horribly accented Spanglish, and getting thrown head first into React having never studied it previously. It was the steepest learning curve of my entire life and I loved it. </p>
        <p>I worked on whole features from scratch primarily using React with PHP (Laravel). I also got to learn SQL to do some data analysis and testing. In my 4-month tenure in Colombia, I…</p>
        <ul>
          <li key="1">Developed a modal feature to schedule appointments for apartment viewings using custom React components along with ones from Airbnb and Google libraries.</li>
          <li key="2">Developed a new booking process with some of the slickest most time-consuming CSS animations I’ve ever had the pleasure of developing.</li>
          <li key="3">Pitched, designed, and developed all the backend and frontend for a user Profile feature where users can better get to know who they will be living with. Got to draw how the database would work on a whiteboard and felt like a proper #hacker.</li>
          <li key="4">Endless new screens and modals across the site along with constant CSS design tweaks.</li>
          <li key="5">Learned a lot and endlessly annoyed my coworkers with questions.</li>
        </ul>
        <ArticleImage image={"booking-modal.png"} description="The snazzy new booking process I made" class="text-center"/>
        <ArticleImage image={"vico-team.png"} description="My lovely coworkers" class="text-center"/>
        <p>It was also really cool to really feel comfortable in Spanish and get deep into such a different culture. I learned how to dance salsa (super badly), befriended the old Colombian ladies living next to me and got invited to Colombian dinners, drank a lot of coffee, <a target="_blank" rel="noopener noreferrer" href="https://micheladas.info/colombiana/," className="article-link">put salt in my beer</a>, and saw a lot of lizards. The experience was amazing and I left having accomplished my goal of feeling comfortable in Spanish and feeling like a half-competent developer</p>
        <p className="m-0">Gracias por todo parceros. Un abrazo desde Alemania <Emoji emoji="🥰" desc="heart-swirling-emoji"/></p>
      </div>
    ])
  }

  if(projectID === '5') {
    return ([
      <div className="">
        personal website
      </div>
    ])
  }

  if(projectID === '6') {
    return ([
      <div className="">
        Languages
      </div>
    ])
  }




}

export default ArticleContent
