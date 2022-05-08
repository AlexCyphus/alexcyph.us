import projectsData from './data/projectsData'
import ProjectContainer from './ProjectContainer'

const ProjectsWrapper = () => (
  <div className="flex flex-wrap gap-4 justify-left project-wrapper">
    {projectsData.map((project) => <ProjectContainer key={project.title} project={project} />)}
  </div>
)

export default ProjectsWrapper
