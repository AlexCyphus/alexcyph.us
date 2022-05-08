import ameyoLogo from '../../../../assets/images/ameyo-logo.png'
import eprojectsLogo from '../../../../assets/images/eprojects-logo.png'
import kaardsLogo from '../../../../assets/images/kaards-logo.png'
import lhotseLogo from '../../../../assets/images/lhotse-logo.png'
import tandemLogo from '../../../../assets/images/tandem-logo.png'
import vicoLogo from '../../../../assets/images/vico-logo.png'
import { ProjectType } from '../ProjectTypes'

const projectsData: ProjectType[] = [
  {
    title: 'Kaards // Co-Founder',
    tags: ['Engineering', 'Product'],
    description: 'Making language learning more efficient and living in a constant state of fear of bugs.',
    image: kaardsLogo,
    url: 'https://kaards.io',
    years: '2021 - present',
  },
  {
    title: 'Lhotse // Frontend Engineer',
    tags: ['Engineering'],
    description: 'Making the world of procurement better one line of code at a time.',
    image: lhotseLogo,
    url: 'https://www.lhotse.de',
    years: '2021 - present',
  },
  {
    title: 'alexcyph.us // Creator',
    tags: ['Engineering', 'Product'],
    description: 'A website I made while in Poland trying to write code as cleanly as possible and see how many colors I could jam onto one website.',
    image: '/assets/images/header-frames/header-frame-1.png',
    url: 'https://github.com/AlexCyphus/alexcyph.us',
    years: '2022',
  },
  {
    title: 'Ameyo // Creator',
    tags: ['Engineering', 'Product'],
    description: 'My Chrome Extension (unsuccessfully) competing with Trello, Jira, and Momentum all at once.',
    image: ameyoLogo,
    url: 'https://chrome.google.com/webstore/detail/ameyo-task-%20-habit-tracke/bocdgdckommbhbffgloaoefepalhiplh?hl=en-GB&authuser=2',
    years: '2020 - 2021',
  },
  {
    title: 'Tandem // Product Manager',
    tags: ['Product'],
    description: 'Product managing, writing code, learning weird language facts.',
    image: tandemLogo,
    url: 'https://www.tandem.net/',
    years: '2019 - 2021',
  },
  {
    title: 'VICO // Fullstack Engineer',
    tags: ['Engineering', 'Product'],
    description: 'Building the Uniplaces of Latin America and butchering the Spanish language in the process.',
    image: vicoLogo,
    url: 'https://getvico.com/',
    years: '2019 - 2019',
  },
  {
    title: 'eProjects // Co-President',
    tags: ['Leadership'],
    description: 'Running events to try to hype students up about the world of startups and entrepreneurship.',
    image: eprojectsLogo,
    url: 'https://www.ubceprojects.com/',
    years: '2018 - 2019',
  },
]

export default projectsData
