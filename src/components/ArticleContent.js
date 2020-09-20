import React from 'react';
import ArticleImage from './ArticleImage'
import {Link} from "react-router-dom"
import Emoji from './Emoji'

function ArticleContent({projectID}) {

  // user personas
  if(projectID === '1') {
    return ([
      <div className="article-content">
        <p>One of the very first projects I worked on at Tandem was developing User Personas. We started with a 42 question survey that received around 25,000 responses in 11 different languages, and we quickly realized this wouldn’t be something we could do in Excel. I didn’t lead the project but really pushed to become the project’s Code Monkey.</p>
        <p>After playing around a lot with data science in university and even competing in a data science hackathon (and getting crushed by some masters students) this was my first chance to apply what I’d learned on real world data. My first realization was that cleaning + preparing data in the real world takes way longer than when you're given a nice clean data set in university.</p>
        <p>I then took my clean data and learned how k-means clustering in Python worked. We ended up clustering on several quantitative variables trying to find specific user groups and found out that Tandem users are very very different. This was my second lesson - real world data doesn’t always play nice and give nice neat correlations. </p>
        <p>We ended up taking some clearer clusters and then extracting some other groups that we knew existed in Tandem (such as pro users, expats, etc) and dug deeper into them. </p>
        <p>At the time, I was working remotely from Canada as a result of travel-during-covid-gone-wrong and was waking up at 4/5am every day to hop into Python and explain the results and do further analyses with the Product Team. It was actually super fun and made waking up in cold Canadian darkness a lot more tolerable.</p>
        <ArticleImage image={"up.png"} description="I made lots of matrices and graphics that I'd love to show you but probably shouldn't" class="text-center"/>
        <p>The whole experience definitely made me feel more comfortable with Python after staring at Jupyter Notebook for about a month. Most importantly, it reignited my interest in data science and it is now I find myself reading about relatively frequently and want to dig deeper into in the future (after German and everything React + JS).</p>
      </div>
    ])
  }
  // eprojects
  if(projectID === '2') {
    return ([
      <div className="article-content">
        <p>eProjects is UBC’s largest entrepreneurship club and my child. In my third year of university I became the VP Finance (managing the budget and accounts and other riveting tasks) because my friend was in the club and really enjoyed it. I spent the year making like minded friends, meeting CEOs, running amazing events, and having a great time. I liked it so much that while on exchange in Barcelona I decided to run for President for the next year. Thankfully myself and my Co-President won and had the tricky task of budgeting, planning, and hiring as 15 member team with a 9-hour time difference. </p>
        <p>Despite the chaos it felt like at the time - we managed to start the year with a team of 15 passionate students and had successfully raised more money from companies (like RBC, EY, V4C, and more) than any other year before. </p>
        <p>Luckily the chaos didn’t stop there, and we arranged ran a code-free Hackathon, speaker series with entrepreneurs, startup tours + talks, panels, and networking nights. The single most stressful moment occurred at CEO Dinner Night, a dinner with 45 of Vancouver’s most important CEOs and startup execs and 45 of Vancouver’s most eager students. We spent the day racing around buying everything we needed, receiving endless catering orders, figuring out how to purchase a keg of beer for the guests, and setting everything up in the offices of a coding bootcamp. After 10 hours of running around - I got on stage to introduce myself, eProjects, and the event to Vancouver’s business leaders and a room full of my peers. As quite a nervous public speaker this was terrifying but ended up actually being a lot of fun hosting the night. It went fine but I did accidentally play ABBA through the office speakers when I plugged in my PowerPoint. </p>
        <p>My personal favorite event was  the hackathon where we had 50 students forming teams to come up with the best business plan, design, and presentation in 8 hours to be judged by a panel consisting of a VC, CEO, and an EY consultant (because they gave us the $$$ and we love them).</p>
        <p>I really consider it to be my first *real* taste of tech because I got to do everything from design, coding, “management”, project management, sales, fundraising, marketing, and everything else that goes into running a year’s 10 large events.</p>
        <ArticleImage image={"eprojects.png"} class="text-center" description="Some of my ePals"/>
        <p>It was an amazing experience and I met some of my best friends through it. I also won the UBC Sauder “Leadership Award” at the end of the year for leading the club and didn’t shut up about it for at least 6 months. </p>
      </div>
    ])
  }
  //
  if(projectID === '3') {
    return ([
      <div className="article-content">
        xx
      </div>
    ])
  }
  // User Personas Content
  if(projectID === '4') {
    return ([
      <div className="article-content">
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
      <div className="article-content">
        personal website
      </div>
    ])
  }

  if(projectID === '6') {
    return ([
      <div className="article-content">
        <p>Growing up with multi-lingual parents (English, French, Spanish, and German) I was amazed by their language flexing from a very young age and knew that some point I wanted to be equally as annoying to those who couldn't understand me. Since then, I have lived in Spain, worked in Spanish in Colombia, and am now learning German in Berlin.</p>
        <p>This article is mainly to answer two questions I get quite frequently from friends which are how to learn a language and what tools should I use?</p>
        <p>I am obviously no expert (I still haven’t nailed the Spanish subjunctive or German adjective endings) but have collected some resources I found particularly helpful.</p>
        <p>---</p>
        <h4><a className="article-link" href="https://www.italki.com/">iTalki</a></h4>
        <p>Getting a basis for the language’s grammar rules and general structures is a super important first step. I achieved this with 4 years of Spanish in Canadian high school and around 3 months of calls with my German-speaking Grandma in German. Assuming neither of those are options for you - I would recommend iTalki. It is a bit costly but will save you a lot of time trying to figure out grammar rules by yourself. </p>
        <p>---</p>
        <h4><a className="article-link" href="http://lingvist.com/">Lingvist</a></h4>
        <p>After getting a little bit of basics under your belt you should start with Lingvist. It is kind of like an aesthetic flashcard app that reads sentences out to you and feeds you new words from related sentences till you understand the whole thing. I’m not sure why it’s so effective but I live and die by Lingvist.</p>
        <p>---</p>
        <h4><a className="article-link" href="https://chrome.google.com/webstore/detail/language-learning-with-ne/hoombieeljmmljlkjmnheibnpciblicm?hl=en">Language Learning with Netflix</a></h4>
        <p>A more fun follow up tool would be Language Learning with Netflix. It’s a Chrome Plugin that shows you all the hidden subtitles on Netflix shows and lets you display two sets of subtitles at once. Or you can just show foreign language subtitles and click on each word for a translation. It is a lot easier to learn Spanish watching Narcos than doing endless flashcards.</p>
        <p>---</p>
        <h4><a className="article-link" href="https://www.tandem.net/">Tandem</a></h4>
        <p>Obviously, I have to recommend Tandem. It is extremely stressful at first seeing messages come in and not really knowing how to reply to them and heavily relying on Google Translate but you will be surprised how quickly you improve. Once you feel more comfortable chatting over Tandem Chat you should try to meet up with someone in person or have a call to practice. It’s scary but the only way to get experience really speaking the language! Also in my opinion it is one of the easiest ways to make friends in a new city. Also the app is obviously stunning and only getting better by the day.</p>
        <p>---</p>
        <h4><a className="article-link" href="https://apps.ankiweb.net/">Anki</a></h4>
        <p>The last and most mind-numbing tool in my arsenal is Anki. When you finish Lingvist and just need some more niche or customized vocabulary - Anki is the place to go. I took words I didn’t know from Netflix shows, made vocab sheets in Google Sheets, and imported them into Anki. It’s mind-numbing going through thousands of flashcards but incredibly helpful. I promise you at some point you will be surprised you can watch Netflix and recognize 99% of the words.</p>
        <p>---</p>
        <h4><a className="article-link" href="https://radioambulante.org/en">Radio Ambulante</a></h4>
        <p>Also a Spanish specific resource: Radio Ambulante. It’s an incredible podcast where Latin Americans share interesting stories about their lives or countries. It also has subtitles so you can read along and add to your Anki deck ;). It is also super helpful as basically every episode has a new Spanish accent so you can start to recognize them and become more used to Spanish in general rather than one specific kind. <a className="article-link" href="https://radioambulante.org/audio/ciudad-infinita.">Here is my favorite episode</a> which convinced me to travel to Lima.</p>
        <p>---</p>
        <p>I’m planning to start learning Portuguese in about a year’s time when I feel okay about my German (hopefully). If you have any recommendations for resources for German or Portuguese let me know - <a className="article-link" href="mailto:alexjcyphus@gmail.com">alexjcyphus@gmail.com</a>.</p>
      </div>
    ])
  }
}


export default ArticleContent
