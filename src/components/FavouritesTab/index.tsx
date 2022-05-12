import React, { useState } from 'react'
import { Drawer, Box } from '@mui/material'
import { useSelector } from 'react-redux'
import Badge from '@mui/material/Badge'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'

import { AppState } from '../../types'
import FavCountries from '../FavCountries'

const FavouritesTab = () => {
  const [isFavsOpen, setFavsOpen] = useState(false)

  const favCounter = useSelector(
    (state: AppState) => state.country.inFavs.length
  )

  const handleOpenFavs = (): void => {
    isFavsOpen ? setFavsOpen(false) : setFavsOpen(true)
  }

  return (
    <>
      <Badge badgeContent={favCounter} onClick={handleOpenFavs}>
        <ShoppingCartIcon />
      </Badge>
      <Drawer anchor="right" open={isFavsOpen} onClose={handleOpenFavs}>
        <Box
          component="nav"
          p={2}
          width="250px"
          textAlign="center"
          role="presentation"
        >
          <FavCountries />
        </Box>
      </Drawer>
    </>
  )
}

export default FavouritesTab
