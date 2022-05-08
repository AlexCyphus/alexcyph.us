import FloatingBlob from './components/FloatingBlobs/FloatingBlob'

const FloatingBlueBlob: React.FC = () => (
  <FloatingBlob
    color="blue"
    className="
      absolute -z-10
      w-[500px] h-[500px] -left-[375px] -top-[250px]
      md:w-[750px] md:h-[750px] md:-left-[400px] md:-top-[400px]
      lg:w-[900px] lg:h-[900px] lg:-left-[400px] lg:-top-[400px]"
  />
)

export default FloatingBlueBlob
