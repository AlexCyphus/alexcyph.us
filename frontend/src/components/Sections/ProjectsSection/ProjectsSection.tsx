import FloatingBlob from '../../FloatingBlobs/FloatingBlob'
import SectionLayout from '../../Layout/SectionLayout'
import './ProjectSection.scss'
import ProjectsWrapper from './ProjectsWrapper'

const ProjectsSection: React.FC = () => (
  <SectionLayout title="Projects">
    <div className="flex justify-center relative">
      <FloatingBlob color="red" className="absolute top-[30px] -right-[50vw] min-h-full" />
      <ProjectsWrapper />
    </div>
  </SectionLayout>
)

export default ProjectsSection
