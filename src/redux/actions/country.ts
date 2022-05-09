import axios from 'axios'
import { Dispatch } from 'redux'

import {
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  LOAD_COUNTRIES,
  CountryActions,
  Country,
} from '../../types'

export function addCountry(country: Country): CountryActions {
  return {
    type: ADD_COUNTRY,
    payload: {
      country,
    },
  }
}

export function removeCountry(country: Country): CountryActions {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      country,
    },
  }
}

export function loadCountries(countries: Country[]): CountryActions {
  return {
    type: LOAD_COUNTRIES,
    payload: {
      loadedCountries: countries,
    },
  }
}

export function fetchCountries(url: string) {
  console.log('Action executed')
  const loadedArray: Country[] = []
  return (dispatch: Dispatch) => {
    axios.get(url).then((response) => {
      console.log(response)
      response.data.map((country: any) =>
        loadedArray.push({
          id: country.name.common as string,
          flag: country.flags.png as string,
          name: country.name.common as string,
          languages: country.languages as Object,
          population: country.population as number,
          region: country.region as string,
        })
      )
      dispatch(loadCountries(loadedArray))
    })
  }
}
