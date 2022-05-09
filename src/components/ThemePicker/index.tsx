import React from 'react'
import { useContext } from 'react'

import { ThemeContext } from '../../pages/Home'
import { ThemeButtonProps } from '../../types'

// is it necessary to destructure the props with the interface declared?
const ThemePicker = (Props: ThemeButtonProps) => {
  const handleThemeSwitch = (colour: string): void => {
    Props.setTheme(colour)
  }
  const themes = ['blue', 'green', 'purple', 'red']

  const colour = useContext(ThemeContext)

  return (
    <>
      <p>Current theme: {colour}</p>
      {/* Maybe this should be a list? */}
      {/* Could be better to put each button as its own component*/}
      {themes.map((theme) => (
        <button onClick={() => handleThemeSwitch(theme)} key={theme}>
          {theme} Button
        </button>
      ))}
    </>
  )
}

export default ThemePicker
