import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { TableRow, TableCell, IconButton } from '@mui/material'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import FavoriteIcon from '@mui/icons-material/Favorite'

import { Country, CountryProps, AppState } from '../../types'
import { addCountry, removeCountry } from '../../redux/actions'
import { ThemeContext } from '../../pages/Home'

const CountryRow = (Props: CountryProps) => {
  const theme = useContext(ThemeContext)
  const dispatch = useDispatch()

  const countryInFav = useSelector((state: AppState) =>
    state.country.inFavs.find((foundCountry) => foundCountry.id === Props.name)
  )

  const country: Country = { ...Props, id: Props.name }

  let langArray: string[] = []
  if (Props.languages) {
    langArray = Object.values(country.languages) as string[]
  }

  const handleFavorites = () => {
    countryInFav
      ? dispatch(removeCountry(country))
      : dispatch(addCountry(country))
  }

  return (
    <TableRow>
      <TableCell>
        <img
          src={Props.flag}
          width="50"
          height="30"
          alt={`flag of ${country.name}`}
        ></img>
      </TableCell>
      <TableCell>
        <Link to={`/countries/${country.name}`}>{country.name}</Link>
      </TableCell>
      <TableCell>{country.population}</TableCell>
      <TableCell>{country.region}</TableCell>
      <TableCell>
        <ul>
          {langArray.map((lang) => (
            <li key={lang}>{lang}</li>
          ))}
        </ul>
      </TableCell>
      <TableCell>
        <IconButton onClick={handleFavorites}>
          {countryInFav ? (
            <FavoriteIcon sx={{ color: theme }} />
          ) : (
            <FavoriteBorderIcon sx={{ color: theme }} />
          )}
        </IconButton>
      </TableCell>
    </TableRow>
  )
}

export default CountryRow
