import React from 'react'
import { Link } from 'react-router-dom'

export function HeaderComponent() {
  return (
    <header class='bg-gray-800 text-white w-auto'>
      <div class='container mx-auto px-4 py-6 flex items-center justify-between'>
        <h1 class='text-2xl text-green-400'>OTM COFRA</h1>
        <nav class='space-x-4'>
          <Link class='text-white hover:text-gray-300' to='/'>Inicio</Link>
          <Link class='text-white hover:text-gray-300' to='/pendientes'>Pendientes</Link>
        </nav>
      </div>
    </header>
  )
}
