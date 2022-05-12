import React, { useContext } from 'react'

import Search from '../Search'
import Sidebar from '../Sidebar'
import FavouritesTab from '../FavouritesTab'
import { NavBarProps } from '../../types'
import { ThemeContext } from '../../pages/Home'
import { AppBar, Toolbar, Typography } from '@mui/material'

import classes from './NavBar.module.scss'

const NavBar = (Props: NavBarProps) => {
  const theme = useContext(ThemeContext)

  return (
    <AppBar component="nav" sx={{ backgroundColor: theme }}>
      <Toolbar className={classes.toolbar}>
        <Sidebar setTheme={Props.setTheme} />
        <Typography variant="h4" component="h1">
          Country API
        </Typography>
        <Search setQuery={Props.setQuery} />
        <FavouritesTab />
      </Toolbar>
    </AppBar>
  )
}

export default NavBar
