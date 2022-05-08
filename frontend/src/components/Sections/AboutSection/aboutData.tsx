import Hyperlink from '../../shared/atoms/Hyperlink'

const aboutData = [
  'Hey there 👋 I’m Alex.',
  'I’m a Canadian finance / economics graduate turned Europe-based software engineer / product manager / indie hacker.',
  <>
    <span>Currently working at </span>
    <Hyperlink text="Lhotse" url="https://www.lhotse.de/" />
    <span> as a frontend engineer to reduce chaos in the world of procurement.</span>
  </>,
  <>
    <span>Also building </span>
    <Hyperlink text="kaards.io" url="http://kaaards.io" />
    <span>
      , a language learning platform with the thesis that language apps
      should optimize for effectiveness over fun.
    </span>
  </>,
  <>
    <span>Previously built </span>
    <Hyperlink text="Ameyo" url="https://chrome.google.com/webstore/detail/ameyo/bocdgdckommbhbffgloaoefepalhiplh?hl=en-GB&authuser=2" />
    <span>
      {' '}
      to try to maintain habits, keep organized, and stay
      sane during COVID lockdowns. I also worked at
      {' '}
    </span>
    <Hyperlink text="Tandem" url="https://tandem.net" />
    <span> where amongst other things “Product Managed” the </span>
    <Hyperlink text="Tandem Certificates" url="https://www.tandem.net/pages/certificates" />
    <span> feature from ideation to release and optimization.</span>
  </>,
  'Super interested in languages (🇨🇦/🇨🇴/🇩🇪), economics, productivity, startups, product design, data analytics, and above all coding (frontend, backend, mobile) 🧑‍💻.',
]

export default aboutData
