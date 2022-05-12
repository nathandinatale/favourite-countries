import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { IconButton, Box, Stack } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

import { AppState, Country } from '../../types'
import { removeCountry } from '../../redux/actions'
import { ThemeContext } from '../../pages/Home'

import classes from './FavCountries.module.scss'

const FavCountries = () => {
  const dispatch = useDispatch()
  const favs = useSelector((state: AppState) => state.country.inFavs)
  const theme = useContext(ThemeContext)

  const handleRemoveFav = (country: Country) => {
    dispatch(removeCountry(country))
  }

  return (
    <Stack>
      {favs.map((country) => (
        <Box className={classes.fav}>
          <img
            width="50"
            height="25"
            src={country.flag}
            alt={`flag of ${country.name}`}
          ></img>
          <Link to={`/countries/${country.name}`}>{country.name}</Link>
          <IconButton onClick={() => handleRemoveFav(country)}>
            <DeleteIcon sx={{ color: theme }} />
          </IconButton>
        </Box>
      ))}
    </Stack>
  )
}

export default FavCountries
