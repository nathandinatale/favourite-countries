import React, { useContext } from 'react'
import { useSelector } from 'react-redux'

import { SearchContext } from '../../pages/Home'
import { AppState, Country } from '../../types'
import CountryRow from '../CountryRow'

const CountryTable = () => {
  let searchQuery = useContext(SearchContext).toLowerCase()
  const countries = useSelector((state: AppState) => state.country.countries)

  // Implement better typing here later
  return (
    <div>
      {searchQuery
        ? countries
            .filter((country) => country.id.toLowerCase().includes(searchQuery))
            .map((country: Country) => (
              <CountryRow
                key={country.id}
                flag={country.flag}
                name={country.name}
                languages={country.languages}
                population={country.population}
                region={country.region}
              />
            ))
        : countries.map((country: Country) => (
            <CountryRow
              key={country.id}
              flag={country.flag}
              name={country.name}
              languages={country.languages}
              population={country.population}
              region={country.region}
            />
          ))}
    </div>
  )
}

export default CountryTable
