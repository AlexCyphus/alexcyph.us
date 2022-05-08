import FloatingBlob, { IFloatingBlob } from '../../FloatingBlobs/FloatingBlob'

interface IContactButton {
  logo: string
  color: IFloatingBlob['color']
  url: string
}

const ContactButton: React.FC<IContactButton> = ({ logo, color, url }) => (
  <button
    className="w-[85px] h-[85px] relative flex items-center justify-center transform hover:scale-125 transition-transform"
    type="button"
    onClick={() => { window.location.href = url }}
  >
    <img src={logo} alt="Contact button" className="w-[60px] h-[60px] z-10" />
    <FloatingBlob color={color} className="absolute w-[85px] h-[85px] left-0 top-0" />
  </button>
)

export default ContactButton
