import { ProjectTagType } from '../ProjectTypes'

interface IProjectScopeTag {
  tag: ProjectTagType
}

const tagBackgrounds: { [key in ProjectTagType]: string } = {
  Engineering: 'bg-red-website',
  Product: 'bg-blue-website',
  Leadership: 'bg-yellow-website',
}

const ProjectScopeTag: React.FC<IProjectScopeTag> = ({ tag }) => (
  <div className={`rounded-md py-1 px-2 text-xs ${tagBackgrounds[tag]}`}>
    {tag}
  </div>
)

export default ProjectScopeTag
