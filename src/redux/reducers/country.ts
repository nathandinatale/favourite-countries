import {
  CountryState,
  CountryActions,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  LOAD_COUNTRIES,
} from '../../types'

export default function country(
  state: CountryState = {
    countries: [],
    inFavs: [],
  },
  action: CountryActions
): CountryState {
  switch (action.type) {
    case ADD_COUNTRY: {
      const { country } = action.payload
      // This could be optimized to search the index of an array relative to ID
      if (state.inFavs.find((foundCountry) => foundCountry.id === country.id)) {
        return state
      }
      return { ...state, inFavs: [...state.inFavs, country] }
    }

    case REMOVE_COUNTRY: {
      const { country } = action.payload
      const index = state.inFavs.findIndex(
        (foundCountry) => foundCountry.id === country.id
      )
      if (index >= 0) {
        state.inFavs.splice(index, 1)
        return { ...state, inFavs: [...state.inFavs] }
      }
      return state
    }

    case LOAD_COUNTRIES: {
      console.log(
        'Hello this is loaded countries',
        action.payload.loadedCountries
      )
      return { ...state, countries: action.payload.loadedCountries }
    }

    default:
      return state
  }
}
