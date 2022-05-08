import emailLogo from '../../../assets/images/email-logo.png'
import githubLogo from '../../../assets/images/github-logo.png'
import linkedinLogo from '../../../assets/images/linkedin-logo.png'
import SectionLayout from '../../Layout/SectionLayout'
import ContactButton from './ContactButton'

const ContactSection: React.FC = () => (
  <SectionLayout title="Contact">
    <div className="flex gap-x-4 max-w-full justify-center">
      <ContactButton logo={linkedinLogo} color="red" url="https://www.linkedin.com/in/alexcyphus/" />
      <ContactButton logo={emailLogo} color="blue" url="mailto:alexjcyphus@gmail.com" />
      <ContactButton logo={githubLogo} color="green" url="https://github.com/AlexCyphus" />
    </div>
  </SectionLayout>
)

export default ContactSection
