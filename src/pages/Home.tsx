import React from 'react'
import { createContext, useState } from 'react'
import { useDispatch } from 'react-redux'

import { fetchCountries } from '../redux/actions'
import NavBar from '../components/NavBar'
import CountryTable from '../components/CountryTable'

export const ThemeContext = createContext<string>('')
export const SearchContext = createContext<string>('')

export default function Home() {
  const [theme, setTheme] = useState('red')
  const [query, setQuery] = useState('')

  const dispatch = useDispatch()
  dispatch(fetchCountries('https://restcountries.com/v3.1/all'))

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <SearchContext.Provider value={query}>
          <NavBar setTheme={setTheme} setQuery={setQuery} />
          <CountryTable />
        </SearchContext.Provider>
      </ThemeContext.Provider>
    </>
  )
}
