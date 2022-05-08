import ProjectScopeTag from './atoms/ProjectScopeTag'
import { ProjectType } from './ProjectTypes'

interface IProjectTags {
  project: ProjectType
}

const ProjectTags: React.FC<IProjectTags> = ({ project }) => (
  <div className="flex gap-x-2">
    {project.tags.map((tag) => <ProjectScopeTag key={tag} tag={tag} />)}
  </div>
)

export default ProjectTags
