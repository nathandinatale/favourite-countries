import React from 'react'
import { useContext } from 'react'

import { SearchContext } from '../../pages/Home'

interface SearchProps {
  setQuery: (query: string) => void
}

const Search = (Props: SearchProps) => {
  // const [typedQuery, setTypedQuery] = useState('')
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
