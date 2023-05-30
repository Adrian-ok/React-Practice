import React from 'react'
import { Link } from 'react-router-dom'

export function HeaderComponent() {
  return (
    <header className='bg-gray-800 text-white w-auto'>
      <div className='container mx-auto px-4 py-6 flex items-center justify-between'>
        <Link className='text-2xl text-green-400' to='/'>OTM COFRA</Link>
        <nav className='space-x-4'>
          <Link className='text-white hover:text-gray-300' to='/'>Inicio</Link>
          <Link className='text-white hover:text-gray-300' to='/pendientes'>Pendientes</Link>
          <Link className='text-white hover:text-gray-300' to='/estado'>Estado</Link>
          <Link className='text-white hover:text-gray-300' to='/fecha'>Fecha</Link>
        </nav>
      </div>
    </header>
  )
}
