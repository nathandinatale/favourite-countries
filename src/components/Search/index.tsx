import React, { useContext } from 'react'

import { SearchContext } from '../../pages/Home'
import { SearchProps } from '../../types'
import classes from './Search.module.scss'

const Search = (Props: SearchProps) => {
  const typedQuery = useContext(SearchContext)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    Props.setQuery(event.target.value)
  }

  return (
    <input
      className={classes.search}
      onChange={handleSearch}
      type="text"
      placeholder="Search for a country"
      value={typedQuery}
    ></input>
  )
}

export default Search
