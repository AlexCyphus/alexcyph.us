import SectionLayout from '../../Layout/SectionLayout'
import aboutData from './aboutData'
import AboutLine from './AboutLine'

const AboutSection: React.FC = () => (
  <SectionLayout title="About">
    <div className="flex flex-col gap-y-3 items-start w-full max-w-6xl">
      {aboutData.map((row) => (
        <AboutLine key={JSON.stringify(row)}>
          {row}
        </AboutLine>
      ))}
    </div>
  </SectionLayout>
)

export default AboutSection
