import { countriesVisited } from './Globe/data/countryData'

const CountriesList: React.FC = () => <p className="text-xs py-2 max-w-[500px] text-center">{countriesVisited.map((country, index) => `${country}${index !== countriesVisited.length - 1 ? ', ' : '.'}`)}</p>

export default CountriesList
