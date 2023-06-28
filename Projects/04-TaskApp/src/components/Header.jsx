import React from 'react'
import { useDarkMode } from '../hooks/useDarkMode'
import { FaMoon, FaSun   } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const Header = () => {

  const { theme, setTheme } = useDarkMode()

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <header>
      <div className='mx-auto max-w-6xl px-2 py-2 sm:px-6 sm:py-8 lg:px-8 rounded-md bg-blue-200 dark:bg-blue-900 dark:text-white'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <div className='text-center sm:text-left'>
            <Link to='/' className='text-center'>
              <h1 className='text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white'>
                Task Practice
              </h1>
            </Link>
            <p className='mt-1.5 text-sm text-gray-500'>
              Let's write a new task! 🎉
            </p>
          </div>

          <div className='mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center'>
            <Link
              to='/addTask'
              className='block rounded-lg bg-emerald-700 px-3 py-3 text-sm text-center font-medium text-white transition hover:bg-emerald-500 dark:bg-gray-500 dark:hover:bg-gray-400'
            >
              New Task
            </Link>

            <button
              onClick={() => changeTheme()}
              className={theme === 'dark' ? 'bg-yellow-400 px-3 py-3 rounded-md hover:bg-yellow-500 flex items-center justify-center' : 'bg-slate-600 px-3 py-3 rounded-md hover:bg-slate-500 flex items-center justify-center'}
            >
              {theme === 'dark' ? <FaSun/> : <FaMoon/>}
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}