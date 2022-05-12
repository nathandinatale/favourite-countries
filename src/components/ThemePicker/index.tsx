import React from 'react'
import { Button, Stack } from '@mui/material'

import { ThemeButtonProps } from '../../types'

const ThemePicker = (Props: ThemeButtonProps) => {
  const handleThemeSwitch = (colour: string): void => {
    Props.setTheme(colour)
  }

  // Could add a color picker option here
  const themes = ['blue', 'green', 'purple', 'red', 'teal']

  return (
    <Stack spacing={2} direction="column" alignItems="center">
      {themes.map((theme) => (
        <Button
          variant="contained"
          onClick={() => handleThemeSwitch(theme)}
          key={theme}
          style={{ backgroundColor: theme }}
          size="small"
        >
          {theme.charAt(0)}
        </Button>
      ))}
    </Stack>
  )
}

export default ThemePicker
