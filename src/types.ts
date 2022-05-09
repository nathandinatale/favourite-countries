// Action types
export const ADD_PRODUCT = 'ADD_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

export const LOAD_COUNTRIES = 'LOAD_COUNTRIES'
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

// A product
export type Product = {
  id: string
  name: string
  price: number
}

export type AddProductAction = {
  type: typeof ADD_PRODUCT
  payload: {
    product: Product
  }
}

export type RemoveProductAction = {
  type: typeof REMOVE_PRODUCT
  payload: {
    product: Product
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type ProductActions = AddProductAction | RemoveProductAction

export type ProductState = {
  inCart: Product[]
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  product: ProductState
  ui: UiState
  country: CountryState
}

export type Country = {
  id: string
  flag: string
  name: string
  languages: Object
  population: number
  region: string
}

export type AddCountryAction = {
  type: typeof ADD_COUNTRY
  payload: {
    country: Country
  }
}

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY
  payload: {
    country: Country
  }
}

export type LoadCountriesAction = {
  type: typeof LOAD_COUNTRIES
  payload: {
    loadedCountries: Country[]
  }
}

export type CountryActions =
  | AddCountryAction
  | RemoveCountryAction
  | LoadCountriesAction

export type CountryState = {
  countries: Country[]
  inFavs: Country[]
}

export interface CountryProps {
  key: string
  flag: string
  name: string
  languages: object
  population: number
  region: string
}

export interface SearchProps {
  setQuery: (query: string) => void
}

export interface SidebarProps {
  setTheme: (colour: string) => void
}

export interface ThemeButtonProps {
  setTheme: (colour: string) => void
}
