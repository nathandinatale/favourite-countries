import React from 'react'
import { useState, useContext } from 'react'

import { ThemeContext } from '../../pages/Home'
import ThemePicker from '../ThemePicker'
import classes from './Sidebar.module.scss'

interface SidebarProps {
  setTheme: (colour: string) => void
}

const Sidebar = (Props: SidebarProps) => {
  const [isVisible, setVisible] = useState(false)

  const handleShow = (): void => {
    isVisible ? setVisible(false) : setVisible(true)
  }

  const color = useContext(ThemeContext)

  return (
    //  Inline styles probably aren't the best solution to this problem
    //  I'm not sure the best way to share the context with the stylesheets other than classnames & predefined CSS classes
    // I will look for a way to do this more programtically or include the theme styles in the context itself
    <nav
      style={{ backgroundColor: color }}
      className={isVisible ? classes.sidebar__shown : classes.sidebar__hidden}
    >
      <button onClick={handleShow}>Hide/show</button>
      {isVisible && <div>SIDEBAR VISIBLE</div>}
      {/* this prop drilling here is less than ideal.. probably can address by grouping the state function into the context*/}
      <ThemePicker setTheme={Props.setTheme} />
    </nav>
  )
}

export default Sidebar
