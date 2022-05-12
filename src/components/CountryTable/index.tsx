import React, { useContext } from 'react'
import { useSelector } from 'react-redux'
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from '@mui/material'

import { SearchContext } from '../../pages/Home'
import { AppState, Country } from '../../types'
import CountryRow from '../CountryRow'

const CountryTable = () => {
  const searchQuery = useContext(SearchContext).toLowerCase()
  const countries = useSelector((state: AppState) => state.country.countries)

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Flag</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Population</TableCell>
              <TableCell>Region</TableCell>
              <TableCell>Languages</TableCell>
              <TableCell>Add Favourite</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {searchQuery
              ? countries
                  .filter((country) =>
                    country.id.toLowerCase().includes(searchQuery)
                  )
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
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default CountryTable
