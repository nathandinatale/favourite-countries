import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { IconButton, Card, CardContent, Typography } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

import { AppState } from '../types'
import { addCountry, removeCountry } from '../redux/actions'
import { ThemeContext } from '../pages/Home'

export default function SingleCountry() {
  const { id } = useParams<{ id: string }>()
  const url = `https://restcountries.com/v3.1/name/${id}`
  const theme = useContext(ThemeContext)
  const dispatch = useDispatch()

  const [fetchedCountry, setCountry] = useState({
    id: '',
    flag: '',
    name: '',
    languages: {},
    population: 0,
    region: '',
    currencies: {},
    capital: '',
    subregion: '',
  })

  // Bug here if a country doesn't have all of these attributes, some don't have capitals
  useEffect(() => {
    const fetchCountry = () => {
      axios.get(url).then((response) => {
        const data = response.data[0]
        console.log(response.data[0])
        setCountry({
          id: data.name.common as string,
          flag: data.flags.png as string,
          name: data.name.common as string,
          languages: data.languages as Object,
          population: data.population as number,
          region: data.region as string,
          currencies: data.currencies as Object,
          capital: data.capital[0] as string,
          subregion: data.subregion as string,
        })
      })
    }
    fetchCountry()
  }, [url])

  // Maybe change this to make a new API call instead of searching the store for the object,
  // if want more attributes for the single page.
  const countryInFav = useSelector((state: AppState) =>
    state.country.inFavs.find(
      (foundCountry) => foundCountry.id === fetchedCountry.id
    )
  )

  const handleFavorites = () => {
    countryInFav
      ? dispatch(removeCountry(countryInFav))
      : // Probably a cleaner way to do this
        // Creating a new country object bc different set of attributes from fetched object
        // Not looking from the store so that country can be added to favs without home page having loaded
        dispatch(
          addCountry({
            id: fetchedCountry.id,
            flag: fetchedCountry.flag,
            name: fetchedCountry.name,
            languages: fetchedCountry.languages,
            population: fetchedCountry.population,
            region: fetchedCountry.region,
          })
        )
  }

  if (!fetchedCountry) {
    return <div>Country not found</div>
  }

  return (
    <Card>
      <CardContent>
        <Typography variant="h3" component="h2">
          {fetchedCountry.name}
        </Typography>
        <img src={fetchedCountry.flag} alt={`flag of ${fetchedCountry.name}`} />
      </CardContent>
      <CardContent>
        <p>Capital: {fetchedCountry.capital}</p>
        <p>Population: {fetchedCountry.population}</p>
        <p>Region: {fetchedCountry.region}</p>
        <p>Subregion: {fetchedCountry.subregion}</p>
        <p>Languages: {Object.values(fetchedCountry.languages)}</p>
        <p>Currencies: {Object.keys(fetchedCountry.currencies)}</p>
      </CardContent>
      <CardContent>
        <IconButton onClick={handleFavorites}>
          {countryInFav ? (
            <FavoriteIcon sx={{ color: theme }} />
          ) : (
            <FavoriteBorderIcon sx={{ color: theme }} />
          )}
        </IconButton>
        <Link to={'/'}>Home Page</Link>
      </CardContent>
    </Card>
  )
}
