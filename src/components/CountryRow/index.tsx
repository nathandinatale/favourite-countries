import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { Country } from '../../types'
import { addCountry, removeCountry } from '../../redux/actions'

interface CountryProps {
  key: string
  flag: string
  name: string
  languages: object
  population: number
  region: string
}

const CountryRow = (Props: CountryProps) => {
  const [favorite, setFavorite] = useState(false)
  let langArray: string[] = []
  const dispatch = useDispatch()
  const country: Country = { ...Props, id: Props.name }

  const handleFavorites = () => {
    favorite ? dispatch(removeCountry(country)) : dispatch(addCountry(country))
    favorite ? setFavorite(false) : setFavorite(true)
  }

  if (Props.languages) {
    langArray = Object.values(country.languages) as string[]
  }

  return (
    <div>
      <img
        src={Props.flag}
        width="100"
        height="100"
        alt="flag of country"
      ></img>
      {country.name}
      {country.population}
      {country.region}
      {langArray}
      <button onClick={handleFavorites}>Favorite</button>
      <Link to={`/countries/${country.name}`}>View Details</Link>
      {favorite && <span>Hello I am favorite</span>}
    </div>
  )
}

export default CountryRow
