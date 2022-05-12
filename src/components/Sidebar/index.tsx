import React, { useState } from 'react'
import { Drawer, Box, IconButton } from '@mui/material'
import { Menu } from '@mui/icons-material/'

import ThemePicker from '../ThemePicker'
import { SidebarProps } from '../../types'

const Sidebar = (Props: SidebarProps) => {
  const [isSidebarOpen, setSideBarOpen] = useState(false)

  const handleShow = (): void => {
    isSidebarOpen ? setSideBarOpen(false) : setSideBarOpen(true)
  }

  return (
    <>
      <IconButton onClick={handleShow}>
        <Menu />
      </IconButton>
      <Drawer anchor="left" open={isSidebarOpen} onClose={handleShow}>
        <Box
          component="nav"
          p={2}
          width="250px"
          textAlign="center"
          role="presentation"
        >
          <ThemePicker setTheme={Props.setTheme} />
        </Box>
      </Drawer>
    </>
  )
}

export default Sidebar
