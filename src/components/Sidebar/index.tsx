import React from 'react'
import { useState, useContext } from 'react'

import { ThemeContext } from '../../pages/Home'
import ThemePicker from '../ThemePicker'
import { SidebarProps } from '../../types'

import classes from './Sidebar.module.scss'

const Sidebar = (Props: SidebarProps) => {
  const [isVisible, setVisible] = useState(false)

  const handleShow = (): void => {
    isVisible ? setVisible(false) : setVisible(true)
  }

  const color = useContext(ThemeContext)

  return (
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
