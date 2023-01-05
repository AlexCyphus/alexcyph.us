import { ProjectType } from './ProjectTypes'

interface IProjectImage {
  project: ProjectType
  activeColor: string
}

const ProjectImage: React.FC<IProjectImage> = ({ project, activeColor }) => (
  <div className={`flex items-center w-full justify-center border border-gray-200 rounded-md h-52 ${activeColor}`}>
    <img
      src={project.image}
      alt={project.title}
      className="h-1/5"
    />
  </div>
)

export default ProjectImage
