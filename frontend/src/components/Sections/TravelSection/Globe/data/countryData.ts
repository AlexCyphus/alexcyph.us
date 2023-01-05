import geoData from './geoData.json'

export const countriesVisited = [
  'Canada', 'United States of America', 'Belize', 'Colombia', 'Peru', 'United Kingdom', 'Sweden',
  'Denmark', 'Germany', 'Spain', 'Italy', 'Portugal', 'Hungary', 'Belgium', 'Taiwan', 'France', 'Austria',
  'Poland', 'Croatia', 'Czechia', 'Monaco', 'Cuba', 'Netherlands', 'Serbia', 'Greece',
]

export const globeCountriesData = geoData
  .features.filter((feature) => !countriesVisited.includes(feature.properties.ADMIN))

export type countryDataType = typeof globeCountriesData
