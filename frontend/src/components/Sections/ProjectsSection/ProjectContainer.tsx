import { useState } from 'react'
import ProjectImage from './ProjectImage'
import { getRandomPastelClass } from './ProjectSectionUtils'
import ProjectTags from './ProjectTags'
import { ProjectType } from './ProjectTypes'

interface IProjectContainer {
  project: ProjectType
}

const ProjectContainer: React.FC<IProjectContainer> = ({ project }) => {
  const [activeColor, setActiveColor] = useState(getRandomPastelClass())
  return (
    <a
      className="flex flex-col gap-y-2 w-full justify-between max-w-[24rem] border bg-white border-gray-200 p-3 rounded-md group ibm-mono hover:shadow-lg transform hover:scale-105 transition-transform"
      href={project.url}
      onMouseLeave={() => setActiveColor(getRandomPastelClass())}
    >
      <div className="flex flex-col gap-y-2 w-full">
        <ProjectImage project={project} activeColor={activeColor} />
        <div className="flex flex-col">
          <p className="text-left">{project.title}</p>
          <p className="text-xs text-left text-gray-400">{project.years}</p>
        </div>
        <p className="text-left text-sm">{project.description}</p>
      </div>
      <ProjectTags project={project} />
    </a>
  )
}

export default ProjectContainer
