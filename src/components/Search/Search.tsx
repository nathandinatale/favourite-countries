import React from 'react'
import { useContext } from 'react'

import { SearchContext } from '../../pages/Home'
import { SearchProps } from '../../types'

const Search = (Props: SearchProps) => {
  let typedQuery = useContext(SearchContext)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(typedQuery)
    Props.setQuery(event.target.value)
  }

  return (
    <div>
      <input
        onChange={handleSearch}
        type="text"
        placeholder="Search for a country"
        value={typedQuery}
      ></input>
    </div>
  )
}

export default Search
