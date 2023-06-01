import React from 'react'
import { useDarkMode } from '../hooks/useDarkMode.jsx'
import { FaMoon, FaSun   } from 'react-icons/fa'

export function ButtonTheme() {

  const { theme, setTheme } = useDarkMode()

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <button onClick={changeTheme} className={theme === 'dark' ? 'bg-yellow-400 p-2 rounded-md' : 'bg-blue-400 p-2 rounded-md'}>
      {theme === 'dark' ? <FaSun/> : <FaMoon/>}
    </button>
  )
}

