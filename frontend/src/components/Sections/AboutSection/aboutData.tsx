// this could be a lot neater
import Hyperlink from '../../shared/atoms/Hyperlink'

const aboutData = [
  "👋 Hey there I'm Alex.",
  'I’m a 📍 Berlin-based Austrian-Canadian fullstack engineer into building amazing products with fullstack Typescript.',
  <>
    <span>Working at </span>
    <Hyperlink text="Throne" url="http://throne.me/" />
    <span> as a fullstack engineer to help grow the creator economy.</span>
  </>,
  <>
    <span>Building </span>
    <Hyperlink text="kaards" url="http://kaaards.io" />
    <span>
      , a language learning platform with the thesis that language apps
      should optimize for effectiveness over fun.
    </span>
  </>,
  <span>
    Prev built: [
    <Hyperlink text="kaards" url="http://kaaards.io" />
    {', '}
    <Hyperlink text="Ameyo" url="https://chrome.google.com/webstore/detail/ameyo/bocdgdckommbhbffgloaoefepalhiplh?hl=en-GB&authuser=2" />
    ]
  </span>,
  <span>
    Prev software engineer: [
    <Hyperlink text="Lhotse" url="https://lhotse.de" />
    {', '}
    <Hyperlink text="VICO" url="https://getvico.com/" />
    ]
  </span>,
  <span>
    Prev product manager: [
    <Hyperlink text="Tandem" url="https://tandem.net" />
    ]
  </span>,
  'Super interested in languages (🇨🇦/🇨🇴/🇩🇪), travel, economics, remote-work, and above all coding (frontend, backend, mobile).',
]

export default aboutData
