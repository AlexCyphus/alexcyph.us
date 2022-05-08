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
    <button
      className="flex flex-col gap-y-2 w-11/12 justify-between max-w-[24rem] border bg-white border-gray-200 p-3 rounded-md group ibm-mono hover:shadow-lg transform hover:scale-105 transition-transform"
      onClick={() => { window.location.href = project.url }}
      type="button"
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
    </button>
  )
}

export default ProjectContainer
