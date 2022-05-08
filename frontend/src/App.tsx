import HeaderAnimation from './components/HeaderAnimation/HeaderAnimation'
import AboutSection from './components/Sections/AboutSection/AboutSection'
import ContactSection from './components/Sections/ContactSection/ContactSection'
import ProjectsSection from './components/Sections/ProjectsSection/ProjectsSection'
import TravelSection from './components/Sections/TravelSection/TravelSection'
import FloatingBlueBlob from './FloatingBlueBlob'
import './index.css'

const App: React.FC = () => (
  <div className="font-mono flex justify-center w-screen py-8">
    <div className="w-10/12">
      <FloatingBlueBlob />
      <HeaderAnimation />
      <AboutSection />
      <ProjectsSection />
      <TravelSection />
      <ContactSection />
    </div>
  </div>
)

export default App
