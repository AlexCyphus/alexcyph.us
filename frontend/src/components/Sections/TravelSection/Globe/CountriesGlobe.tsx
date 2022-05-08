import Globe from 'react-globe.gl'
import FloatingBlob from '../../../FloatingBlobs/FloatingBlob'
import { globeCountriesData } from './data/countryData'
import useDisableGlobeScroll from './hooks/useDisableGlobeScroll'

const CountriesGlobe: React.FC = () => {
  const globeRef = useDisableGlobeScroll()

  const globeSize = window.screen.width > 450 ? 500 : 300
  const blobSize = window.screen.width > 450 ? 'w-[500px] h-[500px]' : 'w-[300px] h-[300px]'

  return (
    <div className="flex justify-center relative w-full">
      <FloatingBlob color="green" className={`absolute top-2 -z-10 ${blobSize}`} />
      <Globe
        ref={globeRef}
        globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
        polygonsData={globeCountriesData}
        width={globeSize}
        height={globeSize}
        polygonCapColor="white"
        polygonSideColor="white"
        backgroundColor="rgba(0, 0, 0, 0)"
      />
    </div>
  )
}

export default CountriesGlobe
