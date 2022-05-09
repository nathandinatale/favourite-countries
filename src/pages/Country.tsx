import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState } from '../types'

export default function Country() {
  const { id } = useParams<{ id: string }>()

  // Maybe change this to make a new API call instead of searching the store for the object,
  // if want more attributes for the single page.
  const country = useSelector((state: AppState) =>
    state.country.countries.find((foundCountry) => foundCountry.id === id)
  )

  if (!country) {
    return <div>Country not found</div>
  }

  return (
    <>
      <h1>Country Page</h1>
      <h2>
        {country.name}
        {country.population}
        {country.region}
      </h2>
    </>
  )
}
