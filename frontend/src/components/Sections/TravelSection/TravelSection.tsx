import SectionLayout from '../../Layout/SectionLayout'
import CountriesList from './CountriesList'
import CountriesGlobe from './Globe/CountriesGlobe'
import { countriesVisited } from './Globe/data/countryData'

const TravelSection = () => (
  <SectionLayout title="Travel">
    <div className="flex flex-col items-center max-w-full text-center gap-y-2">
      <p>On a mission to make this map look less white.</p>
      <p>{`Currently at ${countriesVisited.length} countries.`}</p>
      <CountriesGlobe />
      <CountriesList />
    </div>

  </SectionLayout>
)

export default TravelSection
